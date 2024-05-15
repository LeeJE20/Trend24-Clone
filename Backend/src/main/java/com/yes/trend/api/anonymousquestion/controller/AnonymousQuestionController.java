package com.yes.trend.api.anonymousquestion.controller;

import com.yes.trend.api.anonymousquestion.service.AnonymousQuestionService;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.question.entity.Question;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/anonymous")
public class AnonymousQuestionController {
    private final AnonymousQuestionService anonymousQuestionService;

    @Operation(summary = "QB-01 익명질문페이지에서 전체 질문 리스트", description = "")
    @GetMapping("/question")
    public ApiResponse<ListDto<Question>> getQuestionAll(){
        return ApiResponse.success(SuccessCode.GET_SUCCESS, anonymousQuestionService.getQuestionAll());
    }

    @Operation(summary = "QB-03 선택한 질문에 해당되는 책 리스트", description = "")
    @GetMapping("/question/{questionId}")
    public ApiResponse<ListDto<Book>> getBookListByQuestionId(@PathVariable("questionId") Integer questionId){
        return ApiResponse.success(SuccessCode.GET_SUCCESS, anonymousQuestionService.getSelectQuestionBookList(questionId));
    }
    @Operation(summary = "QB-04 도서 검색창에 입력한 키워드", description = "예시) 입력값 : 라임 / 추출 책: 나의 라임 오렌지나무")
    @GetMapping("/search/{bookText}")
    public ApiResponse<ListDto<Map<String, Object>>> getBookDataBySearch(@PathVariable("bookText") String bookText){
        return ApiResponse.success(SuccessCode.GET_SUCCESS, anonymousQuestionService.getfindBookByNameContain(bookText));
    }


    @Operation(summary = "QB-08 유저가 선택한 도서 보내기", description = "질문에 해당하는 도서 보내기")
    @PostMapping("/question/{questionId}/books")
    public ApiResponse<ListDto<Book>> addBookToQuestion(
            @PathVariable Integer questionId,
            @RequestBody Map<String, String> body
    ) {
        try {
            Integer bookId = Integer.valueOf(body.get("bookId"));
            anonymousQuestionService.addBookToQuestion(questionId, bookId);
            return ApiResponse.success(SuccessCode.GET_SUCCESS,anonymousQuestionService.getMomoryBook(bookId));
        }
        catch (Exception e){
            e.printStackTrace();
            return ApiResponse.error(ErrorCode.BAD_PARAMETER,null);
        }
    }

}
