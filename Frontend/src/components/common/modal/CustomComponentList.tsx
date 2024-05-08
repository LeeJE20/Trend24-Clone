import styled from "styled-components";
import { useState } from "react"; // useState 추가
import { useSelector } from "react-redux"; // useSelector 추가
import { RootState } from "../../../store/store"; // RootState 추가

interface CustomComponent {
  componentName: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const CustomComponentList = ({
  onClose,
  makeTempList,
}: {
  onClose: () => void;
  makeTempList: (item: CustomComponent) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(); // 호버된 박스의 인덱스 상태 추가
  const items = useSelector(
    (state: RootState) => state.customize.componentList
  );

  const handleClose = () => {
    onClose();
  };

  const handleSave = (item: CustomComponent) => {
    makeTempList(item);
    onClose();
  };

  return (
    <Background onClick={handleClose}>
      <Container>
        <Title>
          <button onClick={handleClose}>X</button>
        </Title>
        <ContentConatiner>
          {items.map((item, index) => (
            <BoxContainer
              key={item.componentName}
              onMouseEnter={() => setHoveredIndex(index)} // 호버됐을 때 인덱스 설정
              onMouseLeave={() => setHoveredIndex(-1)} // 호버 해제됐을 때 인덱스 초기화
            >
              <Box
                $isHovered={hoveredIndex === index} // 현재 박스가 호버 상태인지 여부 전달
              >
                {item.componentName}
              </Box>
              {hoveredIndex === index && (
                <PlusButton onClick={() => handleSave(item)}>+</PlusButton>
              )}
              {/* 현재 박스가 호버 상태이면 + 버튼 표시 */}
            </BoxContainer>
          ))}
        </ContentConatiner>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
`;

const ContentConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 90%;
  overflow: auto;
  grid-gap: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const BoxContainer = styled.div`
  position: relative;
`;

const Box = styled.div<{ $isHovered: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  width: 100%;
  height: 100%;

  opacity: ${(props) =>
    props.$isHovered ? "0.2" : "1"}; // 호버 상태에 따라 불투명도 조절
  transition: 0.2s;
`;

const PlusButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: rgba(0, 0, 0, 1); /* 투명도가 있는 검은색 */
  cursor: pointer;
`;

export default CustomComponentList;
