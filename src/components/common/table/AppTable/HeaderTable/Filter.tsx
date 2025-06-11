import { AppConstant } from "@/constant";
import { Column } from "@tanstack/react-table";
import React from "react";

const Filter = ({ column }: { column: Column<any, unknown> }) => {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant, containerStyle, listFilterSelect } =
    column.columnDef.meta ?? {};

  return (
    <div
      style={{
        marginTop: 8,
        ...containerStyle,
      }}
    >
      {filterVariant === "range" ? (
        <div>
          <div className="flex space-x-2">
            {/* See faceted column filters example for min max values functionality */}
            <DebouncedInput
              type="number"
              value={(columnFilterValue as [number, number])?.[0] ?? ""}
              onChange={(value) =>
                column.setFilterValue((old: [number, number]) => [
                  value,
                  old?.[1],
                ])
              }
              placeholder={`Min`}
            />
            <DebouncedInput
              type="number"
              value={(columnFilterValue as [number, number])?.[1] ?? ""}
              onChange={(value) =>
                column.setFilterValue((old: [number, number]) => [
                  old?.[0],
                  value,
                ])
              }
              placeholder={`Max`}
            />
          </div>
          <div className="h-1" />
        </div>
      ) : filterVariant === "select" ? (
        <select
          onChange={(e) => {
            column.setFilterValue(e.target.value);
          }}
          value={columnFilterValue as any}
          className="select-table"
        >
          {/* See faceted column filters example for dynamic select options */}
          <option value="">-- Tất cả --</option>
          {(listFilterSelect || []).map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      ) : (
        filterVariant === "text" && (
          <DebouncedInput
            onChange={(value) => column.setFilterValue(value)}
            placeholder={`Tìm kiếm...`}
            type="text"
            value={(columnFilterValue ?? "") as string}
          />
          // See faceted column filters example for datalist search suggestions
        )
      )}
    </div>
  );
};

export default Filter;

// A typical debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = AppConstant.DEBOUNCE_TIME_IN_MILLISECOND,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, onChange]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input-search-table"
    />
  );
}
