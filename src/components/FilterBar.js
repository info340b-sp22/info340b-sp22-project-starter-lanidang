import React from 'react';
import { HiOutlineX } from 'react-icons/hi';
import filter_options from '../data/filter_options.json';


const Select = ({ options, label, value, onChange }) => {
  const handleChange = (e) => {
    const n = { [label]: e.target.value };
    console.log('select changed', n);
    onChange(n);
  }
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select value={value} onChange={handleChange}>
        {options.map((o, i) => (
          <option value={o} key={i}>{o}</option>
        ))}
      </select>
    </div>
  )
}


export const FilterBar = ({ close, closeFilter, onSubmit, onChange, value }) => {
  return (
    <div className={close ? 'hidden' : 'absolute' + ' bg-slate-100 inset-y-0 right-0 w-1/2 z-20'}>
      <HiOutlineX size={24} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', cursor: 'pointer' }} onClick={closeFilter} />
      <div className='p-6 text-xl font-bold'>Filter Conditions</div>
      <form onSubmit={onSubmit}>
        {filter_options.map((item, index) => (
          <Select {...item} key={index} onChange={onChange} value={value[item.label]} />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}