import { useGlobalFilter, usePagination, useTable } from "react-table";
import GlobalFilter from "./GlobalFilter";

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 4 },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <div>
      <div className="my-3 mx-16">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <div>
        <table {...getTableProps()} className="w-[700px]">
          <thead className="bg-pink-800">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-3 px-5 text-sm text-white font-bold rounded-xl"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="pl-5 border-1 bg-pink-800 border border-white text-sm text-gray-50 rounded h-[100px]"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex gap-2  text-gray-100 pt-3">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="p-2 bg-pink-700 border border-pink-800 rounded-lg font-bold"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="p-2 bg-pink-700 border-pink-800 rounded-lg font-bold"
          >
            Next
          </button>

          <span className="p-2 text-black font-normal">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
