import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const navItems = [
    { text: "Home", href: "#home" },
    { text: "Take Test", href: "#takeTest" },
    { text: "Compare Tool", href: "#compareTool" },
  ];

export function CompareTool({ cards }) {
    let key = 0;
    let card_rows = cards.map((i) => {
        key += 1;
        return <RowContent card={i} key={key}/>
    });

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1">
                <Header navItems={navItems} />
            </div>

            <div className="container-fluid">

                <div className="row">
                    <div>
                        <h1 className="flex justify-center items-center mt-7 mb-7">Compare Tool</h1>
                        <table className="table table-bordered mr-10 ml-10 w-auto">
                            <Headers />
                            <tbody>
                                {card_rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function Headers() {
    return (
        <thead className="thead-dark">
            <tr className="table-dark">
                <th>Brand</th>
                <th>Model</th>
                <th>Processor Brand</th>
                <th>Processor Name</th>
                <th>Ram Size</th>
                <th>Ram Type</th>
                <th>OS</th>
                <th>OS Bit</th>
                <th>Weight</th>
                <th>Display Size</th>
                <th>Warranty</th>
                <th>Touchscreen</th>
                <th>MS Office</th>
                <th>Price</th>
            </tr>
        </thead>
    )
}

function RowContent({ card }) {
    return (
        <tr>
            <td>{card.brand}</td>
            <td>{card.model}</td>
            <td>{card.processor_brand}</td>
            <td>{card.processor_name}</td>
            <td>{card.ram_gb}</td>
            <td>{card.ram_type}</td>
            <td>{card.os}</td>
            <td>{card.os_bit}</td>
            <td>{card.weight}</td>
            <td>{card.display_size}</td>
            <td>{card.warranty}</td>
            <td>{card.Touchscreen}</td>
            <td>{card.msoffice}</td>
            <td>{card.latest_price}</td>
        </tr>
    )
}