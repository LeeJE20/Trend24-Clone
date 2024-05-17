package com.yes.trend.api.anonymousquestion.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.anonymousquestion.service.AnonymousQuestionService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.question.entity.Question;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/anonymous")
public class AnonymousQuestionController {
	private final AnonymousQuestionService anonymousQuestionService;

	@Operation(summary = "QB-01 익명질문페이지에서 전체 질문 리스트", description = "")
	@GetMapping("/question")
	public ApiResponse<ListDto<Question>> getQuestionAll() {
		return ApiResponse.success(SuccessCode.GET_SUCCESS, anonymousQuestionService.getQuestionAll());
	}

	@Operation(summary = "QB-03 선택한 질문에 해당되는 책 리스트", description = "")
	@GetMapping("/question/{questionId}")
	public ApiResponse<ListDto<Book>> getBookListByQuestionId(@PathVariable("questionId") Integer questionId) {
		return ApiResponse.success(SuccessCode.GET_SUCCESS,
			anonymousQuestionService.getSelectQuestionBookList(questionId));
	}

	@Operation(summary = "QB-04 도서 검색창에 입력한 키워드", description = "%이별%")
	@GetMapping("/search/{bookText}")
	public ApiResponse<ListDto<Map<String, Object>>> getBookDataBySearch(@PathVariable("bookText") String bookText) {
		return ApiResponse.success(SuccessCode.GET_SUCCESS,
			anonymousQuestionService.getfindBookByNameContain(bookText));
	}

}
