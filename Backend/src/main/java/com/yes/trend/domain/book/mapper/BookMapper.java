package com.yes.trend.domain.book.mapper;

import com.yes.trend.domain.book.dto.BookDto;
import com.yes.trend.domain.book.entity.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BookMapper {
  @Mapping(target = "bookId", source = "id")
  BookDto.Response BookToDto(Book book);
}