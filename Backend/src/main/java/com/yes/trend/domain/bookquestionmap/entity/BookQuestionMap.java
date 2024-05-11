package com.yes.trend.domain.bookquestionmap.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.question.entity.Question;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "book_question_map")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BookQuestionMap extends BaseEntity {

    @Column
    private Integer recommendCnt;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;
}
