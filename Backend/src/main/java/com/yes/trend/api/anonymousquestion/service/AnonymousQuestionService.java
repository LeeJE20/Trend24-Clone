package com.yes.trend.api.anonymousquestion.service;

import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.dto.BookDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.mapper.BookMapper;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookquestionmap.entity.BookQuestionMap;
import com.yes.trend.domain.bookquestionmap.repository.BookQuestionMapRepository;
import com.yes.trend.domain.question.entity.Question;
import com.yes.trend.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class AnonymousQuestionService {
    private final QuestionRepository questionRepository;
    private final BookQuestionMapRepository bookQuestionMapRepository;
    private final BookRepository bookRepository;
    private final ExternalApiService externalApiService;
    private final BookMapper bookMapper;

    @Value("${DOMAIN.PYTHON}")
    private String pythonUrl;

    public ListDto<Question> getQuestionAll(){
        List<Question> questionList = questionRepository.findAll();
        return new ListDto<>(questionList);
    }

    public ListDto<Book> getSelectQuestionBookList(Integer questionId){
        List<Book> bookQuestionMapList = bookQuestionMapRepository.findBooksByQuestionId(questionId);
        return new ListDto<>(bookQuestionMapList);
    }

    public ListDto<Map<String, Object>> getfindBookByNameContain(String bookText){
        PageRequest pageRequest = PageRequest.of(0, 50);
        List<Object[]> results = bookRepository.findByTitleContain(bookText, pageRequest);
        List<Map<String, Object>> bookList = new ArrayList<>();
        for (Object[] result : results) {
            Map<String, Object> bookData = new HashMap<>();
            bookData.put("productId", result[0]);
            bookData.put("salePrice", result[1]);
            bookData.put("totalClickCount", result[2]);
            bookData.put("totalOrderAmount", result[3]);
            bookData.put("totalOrderCount", result[4]);
            bookData.put("totalPurchaseCount", result[5]);
            bookData.put("categoryId", result[6]);
            bookData.put("categoryName", result[7]);
            bookData.put("contents", result[8]);
            bookList.add(bookData);
        }

        return new ListDto<>(bookList);
    }

    public boolean addBookToQuestion(Integer questionId, Integer bookId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new NoSuchElementException("Question not found with id: " + questionId));
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new NoSuchElementException("Book not found with id: " + bookId));

        BookQuestionMap existingMap = bookQuestionMapRepository.findByQuestionAndBook(questionId, bookId).orElse(null);

        BookQuestionMap bookQuestionMap;
        if (existingMap == null) {
            bookQuestionMap = new BookQuestionMap(1, question, book);
        } else {
            existingMap.setRecommendCnt(existingMap.getRecommendCnt()+1);
            bookQuestionMap = existingMap;
        }

        bookQuestionMapRepository.save(bookQuestionMap);
        return true;
    }

    public ListDto<BookDto.Response> getMomoryBook(Integer bookId){
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new NoSuchElementException("Book not found with id: " + bookId));
        String apiUrl = pythonUrl+"/fastapi/book/momory";
        System.out.println("--------------------");
        System.out.println(apiUrl);

        UriComponents uriBuilder = UriComponentsBuilder.fromHttpUrl(apiUrl).queryParam("product_id", book.getProductId()).build(true);
        URI uri = uriBuilder.toUri();
        Map<String, Object> result = externalApiService.sendGetRequest(uri, Map.class);
        List<Book> bookList = new ArrayList<>();
        List<Integer> productList = (List<Integer>) result.get("result");

        for(Integer productId : productList){
            Book searchedBook = bookRepository.findByProductId(productId)
                    .orElse(null);
            if(searchedBook == null){
                continue;
            }
            bookList.add(searchedBook);
        }
        return new ListDto<>(bookList.stream().map(bookMapper::BookToDto).toList());
    }


}
