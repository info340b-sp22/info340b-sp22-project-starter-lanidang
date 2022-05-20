import React from "react";
import { HiOutlineX } from "react-icons/hi";
import filter_options from "../data/filter_options.json";
import { HiChevronRight } from "react-icons/hi";

const Select = ({ options, label, name, value, onChange }) => {
  const handleChange = (e) => {
    const n = { [name]: e.target.value };
    const selectedItem = options.reduce(item => {
      if (typeof value === 'string') {
        return item === e.target.value;
      } else {
        return item.text === e.target.value;
      }
    })
    console.log("select changed", n);
    onChange(n);
  };
  return (
    <div className="py-2 relative flex">
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
            {(typeof o === 'string') ? o : (o.text)}
          </option>
        ))}
      </select>
    </div>
  );
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
        close
          ? "hidden"
          : "fixed" + " bg-slate-100 inset-y-0 right-0 w-full md:w-1/2 z-20"
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
      <form className="mx-8 px-8 py-4 text-md border rounded-xl border-slate-300" onSubmit={onSubmit}>
        {filter_options.map((item, index) => (
          <Select
            {...item}
            key={index}
            onChange={onChange}
            value={value[item.label]}
          />
        ))}
        <div className="bg-blue-300 relative">
          <div className="absolute top-0 right-0 mt-8">
            <button type="submit" className='mt-4 py-2 px-8 bg-slate-200 hover:bg-slate-300 rounded-xl transition duration-300'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
