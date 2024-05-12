package com.yes.trend.api.drawer.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.drawer.dto.DrawerDto;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.exception.CustomException;
import com.yes.trend.domain.admin.entity.Admin;
import com.yes.trend.domain.admin.repository.AdminRepository;
import com.yes.trend.domain.admin.service.AdminService;
import com.yes.trend.domain.book.dto.BookDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.mapper.BookMapper;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.box.entity.Box;
import com.yes.trend.domain.box.repository.BoxRepository;
import com.yes.trend.domain.boxbook.entity.BoxBook;
import com.yes.trend.domain.boxbook.repository.BoxBookRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class DrawerService {
	private final BoxRepository boxRepository;
	private final BookRepository bookRepository;
	private final BoxBookRepository boxBookRepository;
	private final AdminService adminService;
	private final BookMapper bookMapper;

	@Transactional
	public DrawerDto.Response postDrawer(DrawerDto.Post drawerPost) {
		Admin admin = adminService.getLoginAdmin();
		if (boxRepository.existsByNameAndAdmin(drawerPost.getName(), admin)) {
			throw new CustomException(ErrorCode.ALREADY_EXISTS_DRAWER, drawerPost.getName());
		}
		Box box = new Box(drawerPost.getName(), admin);
		box = boxRepository.save(box);
		return new DrawerDto.Response(box.getId(), box.getName(), new ArrayList<>());
	}

	@Transactional
	public DrawerDto.Layout patchDrawerLayout(DrawerDto.Layout layout) {
		Admin admin = adminService.getLoginAdmin();
		admin.setLayout(layout.getLayout());
		return new DrawerDto.Layout(admin.getLayout());
	}

	public DrawerDto.Layout getDrawerLayout() {
		Admin admin = adminService.getLoginAdmin();
		return new DrawerDto.Layout(admin.getLayout());
	}

	@Transactional
	public DrawerDto.Response postBookInDrawer(Integer drawerId, DrawerDto.BookPost bookPost) {
		Admin admin = adminService.getLoginAdmin();

		Box drawer = boxRepository.findById(drawerId)
			.orElseThrow(() -> new CustomException(ErrorCode.NO_DRAWER, drawerId));

		// 어드민에 해당하는 서랍이 존재하는지
		if (!Objects.equals(drawer.getAdmin().getId(), admin.getId())) {
			throw new CustomException(ErrorCode.NO_DRAWER_BY_ADMIN, drawerId);
		}

		Book book = bookRepository.findById(bookPost.getBookId())
			.orElseThrow(() -> new CustomException(ErrorCode.NO_BOOK, bookPost.getBookId()));

		// 이미 서랍에 존재하는 책인지
		if (boxRepository.existsByBoxIdAndAdminIdAndBookId(drawerId, admin.getId(), bookPost.getBookId())) {
			throw new CustomException(ErrorCode.ALREADY_EXISTS_BOOK_IN_DRAWER, bookPost.getBookId());
		}

		BoxBook boxBook = BoxBook.builder()
			.book(book)
			.box(drawer)
			.build();

		boxBookRepository.save(boxBook);
		List<Book> books = boxRepository.findBooksByBoxId(drawerId);
		List<BookDto.Response> bookDtos = books.stream().map(bookMapper::BookToDto).toList();

		return DrawerDto.Response.builder().drawerId(drawer.getId()).name(drawer.getName()).books(bookDtos).build();

	}
}
