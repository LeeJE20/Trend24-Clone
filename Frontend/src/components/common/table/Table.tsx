import styled from "styled-components";

function Table() {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
          <td>Cell 5</td>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
          <td>Cell 5</td>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
          <td>Cell 5</td>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
          <td>Cell 5</td>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
          <td>Cell 5</td>
        </tr>
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #000000;
  }
  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #55608f;
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: rgba(255, 255, 255, 0.2);
          z-index: -1;
        }
      }
    }
  }
`;

export default Table;
