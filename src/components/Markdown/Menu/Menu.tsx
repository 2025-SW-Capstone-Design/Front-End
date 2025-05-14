import React from 'react';
import * as S from './Menu.styles';
import type { MenuItem } from './Menu.types';

import Header1 from '../../../assets/markdown/Header1.svg';
import Header2 from '../../../assets/markdown/Header2.svg';
import Header3 from '../../../assets/markdown/Header3.svg';
import Header4 from '../../../assets/markdown/Header4.svg';
import Bold from '../../../assets/markdown/Bold.svg';
import Italic from '../../../assets/markdown/Italic.svg';
import Line from '../../../assets/markdown/line.svg';
import Link from '../../../assets/markdown/link.svg';
import Image from '../../../assets/markdown/image.svg';
import Code from '../../../assets/markdown/Code.svg';
import Quote from '../../../assets/markdown/Quotation.svg';

const markdownButtons: MenuItem[] = [
  { icon: Header1, markdown: '# ', label: 'H1' },
  { icon: Header2, markdown: '## ', label: 'H2' },
  { icon: Header3, markdown: '### ', label: 'H3' },
  { icon: Header4, markdown: '#### ', label: 'H4' },
  { divider: true },
  { icon: Bold, markdown: '**굵게**', label: 'Bold' },
  { icon: Italic, markdown: '_기울임_', label: 'Italic' },
  { icon: Line, markdown: '~~취소선~~', label: 'Strikethrough' },
  { divider: true },
  { icon: Link, markdown: '[링크 텍스트](http://example.com)', label: 'Link' },
  { icon: Image, markdown: '![이미지 설명](http://image.url)', label: 'Image' },
  { icon: Code, markdown: '`코드`', label: 'Code' },
  { icon: Quote, markdown: '> 인용문', label: 'Quote' },
];

const Menu = ({
  insertMarkdown,
}: {
  insertMarkdown: (text: string) => void;
}) => {
  return (
    <S.MenuContainer>
      {markdownButtons.map((btn, idx) =>
        'divider' in btn ? (
          <S.Divider key={`divider-${idx}`} />
        ) : (
          <S.MenuButton
            src={btn.icon}
            alt={btn.label}
            key={btn.label}
            onClick={() => insertMarkdown(btn.markdown)}
          ></S.MenuButton>
        ),
      )}
    </S.MenuContainer>
  );
};

export default Menu;
