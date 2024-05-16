package com.yes.trend.api.search.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.querydsl.core.BooleanBuilder;
import com.yes.trend.api.search.dto.SearchDto;
import com.yes.trend.common.dto.PageInfoDto;
import com.yes.trend.domain.book.dto.BookDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.entity.QBook;
import com.yes.trend.domain.book.mapper.BookMapper;
import com.yes.trend.domain.book.repository.BookRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class SearchService {
	private final BookRepository bookRepository;
	private final BookMapper bookMapper;

	public SearchDto.Response searchBooks(String title, String category, int page, int size) {
		QBook qBook = QBook.book;
		BooleanBuilder builder = new BooleanBuilder();

		if (category != null) {
			builder.and(qBook.categoryName.eq(category));
		}

		if (title != null) {
			builder.and(qBook.productName.contains(title));
		}

		Pageable pageable = PageRequest.of(page, size);

		Page<Book> books = bookRepository.findAll(builder, pageable);

		PageInfoDto pageInfoDto = new PageInfoDto(books);
		List<BookDto.Response> list = books.toList().stream().map(b -> bookMapper.BookToDto(b)).toList();
		return SearchDto.Response.builder().pageInfo(pageInfoDto).list(list).build();
	}

}
