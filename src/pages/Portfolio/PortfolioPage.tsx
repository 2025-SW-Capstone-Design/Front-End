import React from 'react';
import * as S from './PortfolioPage.styles';
import IconButton from '../../components/IconButton/IconButton';

import plusIcon from '../../assets/icon/white_plus.svg';
import { useNavigate } from 'react-router-dom';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getPortfolios } from '../../apis/portfolio/portfolio';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const PortfolioPage = () => {
  const navigate = useNavigate();
  const { data: portfolios } = useApiQuery(getPortfolios(), ['portfolios']);

  return (
    <>
      <S.PortfolioContainer>
        <S.PortfolioHeader>
          <S.PortfolioHeaderText>Portfolio</S.PortfolioHeaderText>
          <S.PortfolioHeaderBottomWrapper>
            <span>지금까지 생성한 포트폴리오를 한 눈에 정리했어요!</span>
            <S.PortfolioHeaderButtonWrapper>
              <IconButton
                buttonType="tertiary"
                width="fit-content"
                onClick={() => navigate('/portfolio/create')}
              >
                <img src={plusIcon} alt="plus" />
                포트폴리오 생성
              </IconButton>
            </S.PortfolioHeaderButtonWrapper>
          </S.PortfolioHeaderBottomWrapper>
          <S.PortfolioContentWrapper>
            {portfolios?.map((portfolio) => (
              <PortfolioCard key={portfolio.id} data={portfolio} />
            ))}
          </S.PortfolioContentWrapper>
        </S.PortfolioHeader>
      </S.PortfolioContainer>
    </>
  );
};

export default PortfolioPage;
