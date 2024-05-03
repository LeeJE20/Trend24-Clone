import styled from "styled-components";

const Item = ({
  item,
  coordinate,
  onDragStart,
  onDragEnter,
  onDragEnd,
  handleRowSizeChange,
  handleColumnSizeChange,
}) => {
  const rowSizeChange = (value) => {
    handleRowSizeChange(value);
  };

  const columnSizeChange = (value) => {
    handleColumnSizeChange(value);
  };

  return (
    <ItemContainer
      draggable
      onDragStart={(e) => onDragStart(e, coordinate)}
      onDragEnter={(e) => onDragEnter(e, coordinate)}
      onDragEnd={onDragEnd}
    >
      <div
        onClick={() => {
          rowSizeChange(1);
        }}
        style={{ cursor: "pointer" }}
      >
        T+
      </div>
      <div
        onClick={() => {
          columnSizeChange(2);
        }}
      >
        L+
      </div>
      {item}
      <div
        onClick={() => {
          columnSizeChange(3);
        }}
      >
        R+
      </div>
      <div
        onClick={() => {
          rowSizeChange(4);
        }}
      >
        B+
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  grid-column: ${(props) => props.coordinate?.L || "auto"} /
    ${(props) => props.coordinate?.R || "auto"};
  grid-row: ${(props) => props.coordinate?.T || "auto"} /
    ${(props) => props.coordinate?.B || "auto"};
  cursor: grabbing;
  background-color: #fff;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default Item;
