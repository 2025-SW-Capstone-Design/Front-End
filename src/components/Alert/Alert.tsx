import React from 'react';
import * as S from './Alert.styles';
import x from '../../assets/icon/x.svg';

function Alert() {
  return (
    <S.AlertWrapper>
      <S.AlertText>임시저장 되엇습니다.</S.AlertText>
      <S.AlertIcon>
        <img src={x} alt="" />
      </S.AlertIcon>
    </S.AlertWrapper>
  );
}

export default Alert;
