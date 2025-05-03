import React, { useState } from 'react';
import * as S from './IconInput.styles';
import type { IconInputProps } from './IconInput.types';
import { ReactComponent as Search } from '../../assets/icon/search.svg';

function IconInput({
  placeholder,
  width,
  value,
  onChange,
  ...props
}: IconInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const showIcon = !isFocused;

  return (
    <S.IconInputWrapper width={width}>
      {showIcon && (
        <S.IconWrapper>
          <Search />
        </S.IconWrapper>
      )}
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </S.IconInputWrapper>
  );
}

export default IconInput;
