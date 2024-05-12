package com.yes.trend.api.drawer.dto;

import java.util.ArrayList;
import java.util.List;

import com.yes.trend.domain.book.dto.BookDto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
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

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Layout {
		@Min(value = 1, message = "레이아웃은 1 이상 4이하의 정수여야 합니다.")
		@Max(value = 4, message = "레이아웃은 1 이상 4이하의 정수여야 합니다.")
		private Byte layout;
	}
}
