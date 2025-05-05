import { useState, useCallback } from 'react';
import { isValidEmail } from '../utils/emailValidation';

export function useEmailList() {
  const [emails, setEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<
    'default' | 'error' | 'success'
  >('default');

  const handleAddEmail = useCallback(() => {
    const validation = isValidEmail(emailInput);

    if (!validation.isValid) {
      setErrorMessage(validation.message || '유효하지 않은 이메일입니다.');
      setEmailStatus('error');
      return;
    }

    if (emails.includes(emailInput)) {
      setErrorMessage('이미 추가된 이메일입니다.');
      setEmailStatus('error');
      return;
    }

    setEmails((prev) => [...prev, emailInput]);
    setEmailInput('');
    setErrorMessage('');
    setEmailStatus('success');
  }, [emailInput, emails]);

  const handleRemoveEmail = useCallback((target: string) => {
    setEmails((prev) => prev.filter((email) => email !== target));
  }, []);

  return {
    emails,
    emailInput,
    errorMessage,
    emailStatus,
    setEmailInput,
    handleAddEmail,
    handleRemoveEmail,
  };
}
