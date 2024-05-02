import styled from "styled-components";
import { MainColor } from "../../../constants/Color";

interface Props {
  header: string;
  columnList: string[];
  handleKeyword: (key: string) => void;
  handleTableClick: (idx: number | null) => void;
  keyword: string;
  idx: number;
}

function Table({
  header,
  columnList,
  handleKeyword,
  handleTableClick,
  keyword,
  idx,
}: Props) {
  const keywordClick = (li: string) => {
    handleKeyword(li);
    if (keyword === "") {
      handleTableClick(idx);
    }
  };

  const tableChange = () => {
    handleTableClick(null);
  };

  return (
    <TableContainer>
      <thead onClick={tableChange}>
        <tr>
          <th>{header}</th>
        </tr>
      </thead>
      <tbody>
        {columnList.map((li, idx) => (
          <TableRow key={idx} keyword={keyword} data={li}>
            <td onClick={() => keywordClick(li)}>{li}</td>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: relative;

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #000000;
  }
  th {
    position: sticky;
    top: 0;
    background-color: ${MainColor};
    color: white;
  }

  tbody {
    overflow-y: auto;
    height: calc(100% - 40px);
  }
`;

const TableRow = styled.tr<{ keyword: string; data: string }>`
  background-color: ${({ keyword, data }) =>
    keyword === data ? "gray" : "transparent"};
  td {
    &:hover {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: -1;
      }
    }
  }

  &:hover {
    background-color: rgba(160, 160, 160, 0.458);
  }
`;

export default Table;
