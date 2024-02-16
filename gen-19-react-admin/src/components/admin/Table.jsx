import { useTable } from "react-table";
import axios from "axios";
import React, { useMemo } from "react";
import useSWR from "swr";
// import descriptionProduct from "../../data/DescriptionProduct";

export default function Table() {
  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    "http://localhost:3000/descriptionProduct",
    getProduct
  );
  console.log(data);
  // const data = useMemo(() => descriptionProduct, []);

  const columns = useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Price Discound",
      accessor: "priceDiscount",
    },
    {
      Header: "Review",
      accessor: "review",
    },
    {
      Header: "Star",
      accessor: "star",
    },
    {
      Header: "Description",
      accessor: "description",
    },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
      (
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
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
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      )
    </div>
  );
}
