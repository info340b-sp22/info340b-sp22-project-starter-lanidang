import React from "react";
import { HiOutlineX } from "react-icons/hi";
import filter_options from "../data/filter_options.json";

const Select = ({ options, label, name, value, onChange }) => {
  const handleChange = (e) => {
    const n = { [name]: e.target.value };

    console.log("select changed", n);
    onChange(n);
  };

  return (
    <div className="py-2 relative flex items-center">
      <label className="inline-block w-36" htmlFor={name}>
        {label}
      </label>
      <select
        className="relative py-2 px-3 flex-1 rounded-lg appearance-none"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((o, i) => (
          <option value={o} key={i}>
            {typeof o === "string" ? o : o.text}
          </option>
        ))}
      </select>
    </div>
  );
};

const RangeInput = ({
  label,
  name,
  onChange,
  min: minValue,
  max: maxValue,
}) => {
  const [v1, setV1] = React.useState(Number(minValue));
  const [v2, setV2] = React.useState(Number(maxValue));

  const r1 = React.useRef();
  const r2 = React.useRef();

  const handleR1Change = (e) => {
    setV1(e.target.value);
    r2.current.min = e.target.value;
    onChange({ [name]: { min: e.target.value, max: v2 } });
  };

  const handleR2Change = (e) => {
    setV2(e.target.value);
    onChange({ [name]: { min: v1, max: e.target.value } });
  };

  return (
    <div className="py-2 relative flex items-center">
      <label className="inline-block w-36" htmlFor={name}>
        {label}
      </label>
      <div className="flex flex-1 gap-6">
        <div className="py-2 flex flex-col items-stretch flex-1 ppearance-none">
          <div>
            <span>
              Min:{" "}
              <input
                type="number"
                value={v1}
                onChange={handleR1Change}
                min={minValue}
                max={maxValue}
                className="w-20 px-2 py-1 rounded-lg"
              />
            </span>
            {(v1 < minValue || v1 > maxValue) && <span className="ml-4 text-red-500">Invalid Value!</span>}
          </div>
          <input
            ref={r1}
            type="range"
            name={name}
            value={v1}
            min={minValue}
            max={maxValue}
            onChange={handleR1Change}
          />
          <div className="flex justify-between">
            <span>{minValue}</span>
            <span>{maxValue}</span>
          </div>
        </div>
        <div className="py-2 flex flex-col items-stretch flex-1 ppearance-none">
          <div>
            <span>
              Max:{" "}
              <input
                type="number"
                value={v2}
                onChange={handleR2Change}
                min={v1}
                max={v2}
                className="w-20 px-2 py-1 rounded-lg"
              />
            </span>
          </div>
          <input
            ref={r2}
            type="range"
            name={name}
            value={v2}
            min={v1}
            max={maxValue}
            onChange={handleR2Change}
          />
          <div className="flex justify-between">
            <span>{v1}</span>
            <span>{maxValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormItem = ({ type, ...props }) => {
  if (type === "select") {
    return <Select {...props} />;
  } else if (type === "range") {
    return <RangeInput {...props} />;
  } else {
    return <></>;
  }
};

export const FilterBar = ({
  close,
  closeFilter,
  onSubmit,
  onChange,
  value,
}) => {
  return (
    <div
      className={
        (close
          ? "hidden"
          : "fixed bg-slate-100 inset-y-0 right-0 w-full md:w-1/2 z-20") + " transition-all duration-300"
      }
    >
      <HiOutlineX
        size={24}
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          cursor: "pointer",
        }}
        onClick={closeFilter}
      />
      <div className="p-8 text-xl font-bold">Filter Conditions</div>
      <form
        className="mx-8 px-8 py-4 text-md border rounded-xl border-slate-300"
        onSubmit={onSubmit}
      >
        {filter_options.map((item, index) => (
          <FormItem
            {...item}
            key={index}
            onChange={onChange}
            value={value[item.label]}
          />
        ))}
        <div className="bg-blue-300 relative">
          <div className="absolute top-0 right-0 mt-8">
            <button
              type="submit"
              className="mt-4 py-2 px-8 bg-slate-200 hover:bg-slate-300 rounded-xl transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
