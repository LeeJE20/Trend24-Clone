package com.yes.trend.api.drawer.dto;

import java.util.ArrayList;
import java.util.List;

import com.yes.trend.domain.book.dto.BookDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class DrawerDto {

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Post {
		private String name;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Response {
		private Integer drawerId;
		private String name;
		private List<BookDto.Response> books = new ArrayList<>();
	}
}
