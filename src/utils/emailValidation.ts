import type { EmailValidationResult } from '../types/email';

const isValidEmail = (email: string): EmailValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { isValid: false, message: '이메일을 입력해주세요.' };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, message: '유효하지 않은 이메일 입니다.' };
  }
  return { isValid: true };
};

export { isValidEmail };
