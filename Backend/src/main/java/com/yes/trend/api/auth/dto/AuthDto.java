package com.yes.trend.api.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class AuthDto {

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class AuthRequest {
		@Setter
		private String adminId;
		private String adminPw;
	}

	@Getter
	@NoArgsConstructor
	@ToString
	public static class AuthResponse {

		private String adminId;
		private String accessToken;
		private String refreshToken;

		@Builder
		public AuthResponse(String adminId, String accessToken, String refreshToken) {
			this.adminId = adminId;
			this.accessToken = accessToken;
			this.refreshToken = refreshToken;
		}
	}

	@Getter
	@Setter
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Post {
		private String adminId;
		private String adminPw;
		private String name;
	}

}
