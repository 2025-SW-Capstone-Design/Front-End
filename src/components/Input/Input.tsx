import React from 'react';
import * as S from './Input.styles';
import type { InputProps } from './Input.types';
import errorIcon from '../../assets/icon/error.svg';
import successIcon from '../../assets/icon/success.svg';

function Input({
  status = 'default',
  message,
  placeholder,
  width,
  ...props
}: InputProps) {
  const isDisabled = status === 'disabled';
  return (
    <S.InputContainer>
      <S.InputWrapper
        type="text"
        placeholder={placeholder}
        status={status}
        width={width}
        disabled={isDisabled}
        {...props}
      />
      {message && (
        <S.MessageWrapper>
          {status === 'error' && <img src={errorIcon} alt="Error" />}
          {status === 'success' && <img src={successIcon} alt="Success" />}
          <S.Message status={status}>{message}</S.Message>
        </S.MessageWrapper>
      )}
    </S.InputContainer>
  );
}

export default Input;
