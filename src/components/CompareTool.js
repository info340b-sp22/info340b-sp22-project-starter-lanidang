import React, { useState } from "react";

export function CompareTool({ cards }) {
    let card_rows = cards.map((i) => {
        return <RowContent card={i}/>
    });
    return (
        <table>
            <Headers />
            {card_rows}
        </table>
    )
}

function Headers() {
    return (
        <tr>
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