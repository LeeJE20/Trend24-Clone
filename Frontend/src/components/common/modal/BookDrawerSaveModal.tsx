import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Colors from "../../../constants/Color";
import CustomDropdown from "../select/Select";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // keywordList: string[];
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [selectedItem, setSelectedItem] = useState("Selected item");

  const selectItem = (item: string) => {
    setSelectedItem(item);
  };

  const confirmHandler = () => {
    onClose();
  };

  const closeHandler = () => {
    onClose();
  };

  return (
    <ModalWrapper $isOpen={isOpen}>
      <Popup>
        <PopupHead>
          <div className="title">Trend24</div>
          <button className="closeBtn" onClick={closeHandler}>
            X
          </button>
        </PopupHead>
        {children}
        {/* <PopupBody>
          <div className="title">서랍에 추가</div>
          <BodyContentBox>
            <CustomDropdown
              itemList={keywordList}
              onSelectItem={selectItem}
              selectedItem={selectedItem}
            />
          </BodyContentBox>
        </PopupBody>
        <PopupFoot>
          <div className="saveBtn" onClick={confirmHandler}>
            저장
          </div>
        </PopupFoot> */}
      </Popup>
    </ModalWrapper>
  );
};

const slideUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.189);
  z-index: 999;
  justify-content: center;
  align-items: center;
  animation: ${slideUp} 0.4s ease;
`;

const Popup = styled.div`
  background-color: white;
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 10% auto;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 0.4s ease;
`;

const PopupHead = styled.div`
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.sub1};
  padding: 10px 20px;
  box-sizing: border-box;

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
  .closeBtn {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
  }
`;
const PopupBody = styled.div`
  padding: 30px;
  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 3rem;
    font-weight: bold;
  }
`;



const BodyContentBox = styled.div`
  width: 100%;
`;

const PopupFoot = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 30px;
  .saveBtn {
    display: inline-flex;
    width: auto;
    padding: 15px 25px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.sub1};
    color: #ffffff;
    font-size: 1.6rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-out;
    }
  }
`;

export default Modal;
