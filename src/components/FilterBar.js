import React from 'react';
import filters from '../data/Filters.json';

export function FilterBar() {
    let toggleSidebar = () => {
        let sidebar = document.getElementsByClassName("filter-sidebar-container")[0];
        sidebar.toggleAttribute('open')
    }
    let dropdowns = filters.map((i) => {
        return <Dropdown label={i.label} options={i.options} key={i.label}/>
    });
    return (
        <sidebar className="filter-sidebar-container">
            <div className="sidebar-title-container">
                <div className="sidebar-title">
                    <span>Filter Conditions</span>
                </div>
                <div className="icon" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
            </div>

            <form action="./filtered.html" method="GET">
                {dropdowns}
                <button type="submit" className="filter-button">Filter</button>
            </form>
        </sidebar>
    )
}

function Dropdown(props) {
    let options = props.options;
    let optionsList = options.map((i) => {
        return <option value={i} key={i}>{i}</option>;
    });
    return (
        <div className="filter-dropdown">
            <label htmlFor={props.label}>{props.label}</label>
            <select name={props.label}>
                {optionsList}
            </select>
        </div>
    )
}