import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  return (
    <ModalWrapper isOpen={props.isOpen} onClick={props.onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {props.children}
        <CloseButton onClick={props.onClose}>X</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 50%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Modal;
