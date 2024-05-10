import styled from "styled-components";
import { MainColor } from "../../../constants/Color";

interface Props {
  date: string;
  columnList: wordType[];
  handleKeyword: (key: wordType) => void;
  handleTableClick: (idx: string | null) => void;
  selectedKeyword: wordType | null;
  // idx: number;
}

interface wordType {
  keywordId: number;
  name: string;
  clickCount: number;
  ranking: number;
}

function Table({
  date,
  columnList,
  handleKeyword,
  handleTableClick,
  selectedKeyword,
}: Props) {

  const keywordClick = (li: wordType) => {
    handleKeyword(li);
    console.log("date", date);
    console.log(columnList);
    
    
    if (selectedKeyword === null) {
      handleTableClick(date);
    }
  };

  const tableChange = () => {
    handleTableClick(null);
  };

  return (
    <TableContainer>
      <thead onClick={tableChange}>
        <tr>
          <th>{date}</th>
        </tr>
      </thead>
      <tbody>
        {columnList.map((li, idx) => (
          <TableRow
            key={idx}
            $selectedKeyword={selectedKeyword}
            $currentKeyword={li.keywordId}
          >
            <td onClick={() => keywordClick(li)}>{li.name}</td>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  font-size: 1.4rem;
  width: 100%;
  min-width: 100px;
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
    height: calc(100% - 40px);
  }
`;

const TableRow = styled.tr<{
  $selectedKeyword: wordType | null;
  $currentKeyword: number;
}>`
  background-color: ${({ $selectedKeyword, $currentKeyword }) =>
    $selectedKeyword !== null && $selectedKeyword?.keywordId === $currentKeyword
      ? "gray"
      : "transparent"};

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
