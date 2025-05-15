import React, { useState } from 'react';
import * as S from './ReadmePage.styles';
import IconButton from '../../components/IconButton/IconButton';

import plusIcon from '../../assets/icon/white_plus.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import Dropdown from '../../components/Dropdown/Dropdown';
import { getProjects } from '../../apis/project/project';
import { getReadmes } from '../../apis/readme/readme';
import ReadmeCard from '../../components/ReadmeCard/ReadmeCard';

const ReadmePage = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  const { data: projects } = useApiQuery(getProjects(Number(teamId)), [
    'projects',
    teamId,
  ]);

  const { data: readmes } = useApiQuery(
    getReadmes(Number(teamId), selectedProjectId as number),
    ['readmes', teamId, selectedProjectId],
  );

  const handleProjectSelect = (projectId: number) => {
    if (projectId === -1) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);
    }
  };

  const handleNavigate = () => {
    if (!selectedProjectId) {
      alert('드롭다운 메뉴에서 프로젝트를 선택해주세요.');
      return;
    }
    navigate(`/team/${teamId}/project/${selectedProjectId}/readme/create`);
  };

  return (
    <>
      <S.ReadmeContainer>
        <S.ReadmeHeader>
          <S.ReadmeHeaderText>Readme</S.ReadmeHeaderText>
          <S.ReadmeHeaderBottomWrapper>
            <span>지금까지 생성한 리드미를 한 눈에 정리했어요!</span>
            <S.ReadmeHeaderButtonWrapper>
              <Dropdown
                placeholder="프로젝트를 선택해주세요."
                options={projects || []}
                onSelect={handleProjectSelect}
                dropdownType="primary"
                width="340px"
              />
              <IconButton
                buttonType="tertiary"
                width="fit-content"
                onClick={handleNavigate}
              >
                <img src={plusIcon} alt="plus" />
                리드미 생성
              </IconButton>
            </S.ReadmeHeaderButtonWrapper>
          </S.ReadmeHeaderBottomWrapper>
          <S.ReadmeContentWrapper>
            {readmes?.map(
              (readme) =>
                readme.isLatest && (
                  <ReadmeCard
                    key={readme.readmeId}
                    readmeId={readme.readmeId}
                    teamId={Number(teamId)}
                    projectId={selectedProjectId as number}
                  />
                ),
            )}
          </S.ReadmeContentWrapper>
        </S.ReadmeHeader>
      </S.ReadmeContainer>
    </>
  );
};

export default ReadmePage;
