interface EmailValidationResult {
  isValid: boolean;
  message?: string; // 유효하지 않을 경우의 에러 메시지
}

export { EmailValidationResult };
