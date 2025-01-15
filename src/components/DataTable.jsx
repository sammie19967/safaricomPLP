import React from "react";
import { useTable } from "react-table";

const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Age", accessor: "age" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Year in School", accessor: "year_in_school" },
      { Header: "Major", accessor: "major" },
      { Header: "Monthly Income", accessor: "monthly_income" },
      { Header: "Financial Aid", accessor: "financial_aid" },
      { Header: "Tuition", accessor: "tuition" },
      { Header: "Housing", accessor: "housing" },
      // Add other columns as per your data structure
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="data-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
