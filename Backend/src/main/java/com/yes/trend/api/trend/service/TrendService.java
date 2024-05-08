package com.yes.trend.api.trend.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.trend.dto.TrendDto;
import com.yes.trend.api.trend.mapper.TrendMapper;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.common.exception.CustomException;
import com.yes.trend.domain.keyword.entity.Keyword;
import com.yes.trend.domain.keyword.entity.KeywordView;
import com.yes.trend.domain.keyword.repository.KeywordRepository;
import com.yes.trend.domain.keyword.repository.KeywordViewRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class TrendService {
	private final KeywordViewRepository keywordViewRepository;
	private final KeywordRepository keywordRepository;
	private final TrendMapper trendMapper;

	public ListDto<TrendDto.DailyKeywordsDto> getDailyKeywords() {
		LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
		LocalDateTime todayEnd = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);

		// 어제부터 1주일
		LocalDateTime startOfDay = todayStart.minusWeeks(1L);
		LocalDateTime endOfDay = todayEnd.minusDays(1L);

		List<KeywordView> keywordViews = keywordViewRepository.findByCreatedTimeBetweenOrderByCreatedTimeDescRankingAsc(
			startOfDay, endOfDay);

		LocalDate currentDate = null;
		TrendDto.DailyKeywordsDto currentDailyKeywordsDto = null;
		List<TrendDto.DailyKeywordsDto> keywordList = new ArrayList<>();

		for (KeywordView keywordView : keywordViews) {
			LocalDate date = keywordView.getCreatedTime().toLocalDate();
			// 이전 키워드와 생성일이 다를 경우 새로운 DailyKeywordsDto 생성
			if (!date.equals(currentDate)) {
				currentDailyKeywordsDto = new TrendDto.DailyKeywordsDto(date, new ArrayList<>());
				keywordList.add(currentDailyKeywordsDto);
				currentDate = date;
			}
			currentDailyKeywordsDto.getWords().add(trendMapper.KeywordViewToResponseDto(keywordView));
		}

		return new ListDto<>(keywordList);

	}

	public ListDto<TrendDto.KeywordRanking> getKeywordsRankingHistories(int keywordId) {
		Keyword keyword = keywordRepository.findById(keywordId)
			.orElseThrow(() -> new CustomException(ErrorCode.NO_ID, keywordId));
		LocalDate keywordCreatedDate = keyword.getCreatedTime().toLocalDate();
		LocalDateTime startOfDay = LocalDateTime.of(keywordCreatedDate, LocalTime.MIN)
			.minusDays(6L);
		LocalDateTime endOfDay = LocalDateTime.of(keywordCreatedDate, LocalTime.MAX);

		List<Keyword> keywords = keywordRepository.findByNameAndCreatedTimeBetween(keyword.getName(), startOfDay,
			endOfDay);

		// 날짜별 랭킹
		Map<LocalDate, Integer> rakingByDate = new LinkedHashMap<>();
		for (int i = 0; i < 7; i++) {
			rakingByDate.put(keywordCreatedDate.minusDays(i), 0);
		}

		for (Keyword k : keywords) {
			LocalDate targetDate = k.getCreatedTime().toLocalDate();
			rakingByDate.put(targetDate, k.getRanking());
		}

		// 결과값
		List<TrendDto.KeywordRanking> keywordHistories = rakingByDate.entrySet()
			.stream()
			.map(k -> TrendDto.KeywordRanking.builder()
				.date(k.getKey())
				.ranking(k.getValue())
				.build())
			.toList();

		return new ListDto<>(keywordHistories);

	}
}
