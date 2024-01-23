import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { IoOpenOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
const CustomTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div className="flex">
            <IoOpenOutline className="w-9/12 h-4/6 m-auto pr-2" />
            {" LISTA"}
          </div>
        ),
        accessor: "lista",
        headerClass: "bg-blue-300",
        className: "bg-blue-200",
        Cell: ({ row }) => (
          <>
            <div>{row.original.lista}</div>
            <div>{row.original.fuente}</div>
          </>
        ),
      },
      {
        Header: () => (
          <div className="flex">
            <IoPeopleSharp className="w-9/12 h-4/6 m-auto pr-2" />
            {" EXTENSIÓN"}
          </div>
        ),
        accessor: "extension",
        headerClass: "bg-green-300",
        className: "bg-green-200",
      },
      {
        Header: () => (
          <div className="flex">
            <CiShoppingTag className="w-9/12 h-4/6 m-auto pr-2" />
            {" DATOS"}
          </div>
        ),
        accessor: "datos",
        headerClass: "bg-yellow-300",
        className: "bg-yellow-200",
      },
      {
        Header: () => (
          <div className="flex">
            <LuSettings2 className="w-9/12 h-4/6 m-auto pr-2" />
            {" ACCIONES"}
          </div>
        ),
        accessor: "acciones",
        headerClass: "bg-red-300",
        className: "bg-red-200",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="mb-4 p-2 "
      />
      <table
        {...getTableProps()}
        className="table-auto w-full h-auto rounded-lg  overflow-hidden"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`text-xl p-2  ${column.headerClass}  `}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                  </span>
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
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className={`p-2 ${cell.column.className}`}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
