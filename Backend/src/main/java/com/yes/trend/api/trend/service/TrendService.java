package com.yes.trend.api.trend.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.trend.dto.TrendDto;
import com.yes.trend.api.trend.mapper.TrendMapper;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.keyword.dto.KeywordDto;
import com.yes.trend.domain.keyword.entity.KeywordView;
import com.yes.trend.domain.keyword.repository.KeywordViewRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class TrendService {
	private final KeywordViewRepository keywordViewRepository;
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
		List<TrendDto.DailyKeywordsDto> keywordList = new ArrayList<TrendDto.DailyKeywordsDto>();

		for (KeywordView keywordView : keywordViews) {
			LocalDate date = keywordView.getCreatedTime().toLocalDate();
			// 이전 키워드와 생성일이 다를 경우 새로운 DailyKeywordsDto 생성
			if (!date.equals(currentDate)) {
				currentDailyKeywordsDto = new TrendDto.DailyKeywordsDto(date, new ArrayList<KeywordDto.Response>());
				keywordList.add(currentDailyKeywordsDto);
				currentDate = date;
			}
			currentDailyKeywordsDto.getWords().add(trendMapper.KeywordViewToResponseDto(keywordView));
		}

		ListDto<TrendDto.DailyKeywordsDto> result = new ListDto<>(keywordList);

		return result;

	}
}
