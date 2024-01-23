import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { IoOpenOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { FaDownload } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
const CustomTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div className="flex text-slate-200  ">
            <IoOpenOutline className="w-9/12 h-4/6 m-auto pr-2 " />
            <p className="font-medium"> Listas</p>
          </div>
        ),
        accessor: "lista",
        headerClass: "bg-neutral-700",
        className: "bg-neutral-600 text-slate-200",
        Cell: ({ row }) => (
          <>
            <div>{row.original.lista}</div>
            <div className=" text-neutral-500/90">{row.original.fuente}</div>
          </>
        ),
      },
      {
        Header: () => (
          <div className="flex text-slate-200">
            <IoPeopleSharp className="w-9/12 h-4/6 m-auto pr-2 " />
            <p className="font-medium"> EXTENSIÓN</p>
          </div>
        ),
        accessor: "extension",
        headerClass: "bg-neutral-500/30",
        className: "bg-neutral-500 text-slate-200",
      },
      {
        Header: () => (
          <div className="flex text-slate-200">
            <CiShoppingTag className="w-9/12 h-4/6 m-auto pr-2" />
            <p className="font-medium"> DATOS</p>
          </div>
        ),
        accessor: "datos",
        headerClass: "bg-neutral-700",
        className: "bg-neutral-600 text-slate-200",
      },
      {
        Header: () => (
          <div className="flex text-slate-200">
            <LuSettings2 className="w-9/12 h-4/6 m-auto pr-2" />
            <p className="font-medium"> ACCIONES</p>
          </div>
        ),
        accessor: "acciones",
        headerClass: "bg-neutral-700/30",
        className: "bg-neutral-700 text-slate-200 ",
        Cell: ({ row }) => (
          <>
            <div className="flex">
              <div className=" text-neutral-100">
                <FaDownload />
              </div>
              <div className=" text-neutral-500/90">
                <RiMailSendLine />
              </div>
            </div>
          </>
        ),
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
        <tbody {...getTableBodyProps()} className="divide-y">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className={`p-2 ${cell.column.className} `}
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
