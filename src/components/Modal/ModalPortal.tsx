import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

// 모달을 루트 DOM 트리 바깥에 그리기 위한 도구
// body 태그 밑에 렌더링돼서 레이아웃에 간섭 안 하고, z-index 같은 것도 자유롭게 줄 수 있음
const ModalPortal = ({ children }: { children: ReactNode }) => {
  const modalRootRef = useRef(document.createElement('div'));

  useEffect(() => {
    const modalRoot = modalRootRef.current;

    if (!modalRoot.parentElement) {
      document.body.appendChild(modalRoot);
    }

    return () => {
      if (modalRoot.parentElement) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [modalRootRef]);

  return ReactDOM.createPortal(children, modalRootRef.current);
};

export default ModalPortal;
