package com.yes.trend.api.anonymousquestion.controller;

import com.yes.trend.api.anonymousquestion.service.AnonymousQuestionService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.question.entity.Question;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/anonymous")
public class AnonymousQuestionController {
    private final AnonymousQuestionService anonymousQuestionService;

    @Operation(summary = "익명질문페이지에서 전체 질문 리스트", description = "")
    @GetMapping("/question")
    public ApiResponse<List<Question>> getQuestionAll(){
        return ApiResponse.success(SuccessCode.GET_SUCCESS, anonymousQuestionService.getQuestionAll());
    }

    @Operation(summary = "선택한 질문에 해당되는 책 리스트", description = "")
    @GetMapping("/question/{questionId}")
    public ApiResponse<List<Book>> getBookListByQuestionId(@PathVariable("questionId") Integer questionId){
        return ApiResponse.success(SuccessCode.GET_SUCCESS, anonymousQuestionService.getSelectQuestionBookList(questionId));
    }
}
