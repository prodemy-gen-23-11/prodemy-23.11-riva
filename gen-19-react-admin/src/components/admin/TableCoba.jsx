// import {
//   buildHeaderGroups,
//   createColumnHelper,
//   flexRender,
//   useReactTable,
// } from "@tanstack/react-table";
import { useTable } from "react-table";
import axios from "axios";
import React from "react";
import useSWR from "swr";

export default function Table({ data, columns }) {
  const getProduct = (url) => axios.get(url).then((response) => response.data);

  const { data, columns, isLoading } = useSWR(
    "http://localhost:3000/descriptionProduct",
    getProduct
  );

  //   type data ={
  //     name?: String
  //     description?: String
  //     price?: String
  //     priceDiscount: String
  //     review: String
  //     strar: Number
  //   }

  //   const columns = [
  //     columnHelper.accessor("name", {
  //       cell: (info) => info.getValue(),
  //       header: () => <span>Name</span>,
  //       footer: (info) => info.column.id,
  //     }),

  //     columnHelper.accessor("description", {
  //       cell: (info) => <i>{info.getValue()}</i>,
  //       header: () => <span>Description</span>,
  //       footer: (info) => info.column.id,
  //     }),

  //     columnHelper.accessor("price", {
  //       cell: (info) => <i>{info.getValue()}</i>,
  //       header: () => <span>Price</span>,
  //       footer: (info) => info.column.id,
  //     }),

  //     columnHelper.accessor("priceDiscound", {
  //       cell: (info) => <i>{info.getValue()}</i>,
  //       header: () => <span>Price Discound</span>,
  //       footer: (info) => info.column.id,
  //     }),

  //     columnHelper.accessor("review", {
  //       cell: (info) => <i>{info.getValue()}</i>,
  //       header: () => <span>Review</span>,
  //       footer: (info) => info.column.id,
  //     }),

  //     columnHelper.accessor("star", {
  //       cell: (info) => <i>{info.getValue()}</i>,
  //       header: () => <span>Star</span>,
  //       footer: (info) => info.column.id,
  //     }),
  //   ];

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
          <table {...getTableProp()}>
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
              {rows.map((row, i) => {
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
        // <div className="p-2">
        //   <table>
        //     <thead>
        //       {table.getHeaderGroups().map((headerGroup) => (
        //         <tr key={headerGroup.id}>
        //           {headerGroup.headers.map((header) => (
        //             <th key={header.id}>
        //               {header.isPlaceholder
        //                 ? null
        //                 : flexRender(
        //                     header.column.columnDef.header,
        //                     header.getContext()
        //                   )}
        //             </th>
        //           ))}
        //         </tr>
        //       ))}
        //     </thead>
        //     <tbody>
        //       {table.getRowModel().rows.map((row) => (
        //         <tr key={row.id}>
        //           {row.getVisibleCells().map((cell) => (
        //             <td key={cell.id}>
        //               {flexRender(
        //                 cell.column.columnDef.cell,
        //                 cell.getContext()
        //               )}
        //             </td>
        //           ))}
        //         </tr>
        //       ))}
        //     </tbody>
        //     <tfoot>
        //       {table.getFooterGroups().map((footerGroup) => (
        //         <tr key={footerGroup.id}>
        //           {footerGroup.headers.map((header) => (
        //             <th key={header.id}>
        //               {header.isPlaceholder
        //                 ? null
        //                 : flexRender(
        //                     header.column.columnDef.footer,
        //                     header.getContext()
        //                   )}
        //             </th>
        //           ))}
        //         </tr>
        //       ))}
        //     </tfoot>
        //   </table>
        //   <div className="h-4" />
        //   <button onClick={() => rerender()} className="border p-2">
        //     Rerender
        //   </button>
        // </div>
      )}
      )
    </div>
  );
}
