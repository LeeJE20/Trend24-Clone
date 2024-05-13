package com.yes.trend.api.anonymousquestion.service;

import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookquestionmap.repository.BookQuestionMapRepository;
import com.yes.trend.domain.question.entity.Question;
import com.yes.trend.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class AnonymousQuestionService {
    private final QuestionRepository questionRepository;
    private final BookQuestionMapRepository bookQuestionMapRepository;
    private final BookRepository bookRepository;

    public List<Question> getQuestionAll(){
        List<Question> questionList = questionRepository.findAll();
        return questionList;
    }

    public List<Book> getSelectQuestionBookList(Integer questionId){
        List<Book> bookQuestionMapList = bookQuestionMapRepository.findBooksByQuestionId(questionId);
        return bookQuestionMapList;
    }

    public List<Map<String, Object>> getfindBookByNameContain(String bookText){
        List<Object[]> results = bookRepository.findByTitleContain(bookText);

        List<Map<String, Object>> bookList = new ArrayList<>();
        for (Object[] result : results) {
            Map<String, Object> bookData = new HashMap<>();
            bookData.put("id", result[0]);
            bookData.put("productName", result[1]);
            bookList.add(bookData);
        }

        return bookList;
    }
}
