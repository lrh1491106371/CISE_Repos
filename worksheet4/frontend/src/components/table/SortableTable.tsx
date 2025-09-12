import React from "react";

interface Header<T> {
  key: keyof T;
  label: string;
}

interface SortableTableProps<T extends object> {
  headers: Header<T>[];
  data: T[];
}

function SortableTable<T extends object>({ headers, data }: SortableTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={String(header.key)}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((header) => (
              <td key={String(header.key)}>{String(row[header.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SortableTable;