package com.yes.trend.api.status.service;

import com.yes.trend.api.status.dto.StatusDto;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.bookclick.entity.BookClick;
import com.yes.trend.domain.bookclick.repository.BookClickRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class StatusService {
  private final BookClickRepository bookClickRepository;

  public ListDto<StatusDto.WeeklyTopClickBooksDto> getWeeklyTopClickedBooks() {
    LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN).minusWeeks(1).plusDays(1);
    LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
    List<BookClick> bookClicks = bookClickRepository.findByCreatedTimeAfter(start);

    // 도서별 클릭수 합계 계산
    Map<Book, Integer> clickCountMap = new HashMap<>();
    for (BookClick bookClick : bookClicks) {
      clickCountMap.put(bookClick.getBook(), clickCountMap.getOrDefault(bookClick.getBook(), 0) + bookClick.getCount());
    }

    // 클릭수가 높은 도서 3권 선택 및 정렬
    List<StatusDto.WeeklyTopClickBooksDto> list = new ArrayList<>();
    int ranking = 1;
    List<Map.Entry<Book, Integer>> sortedClickCountList = clickCountMap.entrySet().stream()
        .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
        .toList();

    for (Map.Entry<Book, Integer> entry : sortedClickCountList) {
      if (ranking > 3) break;
      // TODO: setter 안쓰는 방법으로 변경하기.
      if (entry.getKey() != null) {
        Book book = entry.getKey();
        StatusDto.WeeklyTopClickBooksDto dto = new StatusDto.WeeklyTopClickBooksDto();
        dto.setBookId(book.getId());
        dto.setProductName(book.getProductName());
        dto.setClickCountSum(entry.getValue());
        dto.setWeeklyClickCount(getWeeklyClickCount(book, start, end));
        dto.setRanking(ranking++);
      }
    }

    return new ListDto<>(list);
  }

  private List<Integer> getWeeklyClickCount(Book book, LocalDateTime start, LocalDateTime end) {
    List<BookClick> bookClicks = bookClickRepository.findByBookAndCreatedTimeBetween(book, start, end);
    List<Integer> weeklyClickCount = new ArrayList<>(Collections.nCopies(7, 0));
    for (BookClick click : bookClicks) {
      int dayOfWeek = click.getCreatedTime().getDayOfWeek().getValue() - 1; // Adjusting to 0-indexed
      weeklyClickCount.set(dayOfWeek, click.getCount());
//      weeklyClickCount.set(dayOfWeek, weeklyClickCount.get(dayOfWeek) + click.getCount());
    }
    return weeklyClickCount;
  }
}
