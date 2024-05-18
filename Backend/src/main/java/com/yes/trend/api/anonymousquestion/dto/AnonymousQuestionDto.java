package com.yes.trend.api.anonymousquestion.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AnonymousQuestionDto {
	@Getter
	@NoArgsConstructor
	public static class SelectedBook {
		private String bookId;
	}
}
