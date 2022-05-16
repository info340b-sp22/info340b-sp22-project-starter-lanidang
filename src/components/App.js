import React from 'react';
import { Menu } from './Navigation';
import { FilterBar } from './FilterBar';
import { CardList } from './CardList';
import data from '../data/Cleaned_Laptop_data.json';

const cards = data.map((card) => ({
    imgUrl: 'https://images.app.goo.gl/rK4UDHZ9K5MLUriG8',
    imgAlt: 'Laptop',
    title: card.brand + " " + card.model,
    price: card.latest_price,
    infoItems: [{ name: 'RAM', value: card.ram_gb },
    { name: 'OS', value: card.os },
    { name: 'Weight', value: card.weight },
    { name: 'Processor', value: card.processor_name }]
}))

export function App() {
    return (
        <div className="body-container">
            <header>
                <Menu />
            </header>
            <FilterBar />
            <CardList cards={cards} />
            <footer>
                <address>
                    Contact at <a href="mailto:daokr@uw.edu">daokr@uw.edu</a>, <a
                        href="mailto:lanidang@uw.edu">lanidang@uw.edu</a>, <a href="mailto:ugong@uw.edu">ugong@uw.edu</a>, or <a
                            href="mailto:msk812@uw.edu">msk812@uw.edu</a>.
                </address>
                <p>&copy; 2022 Kristine Dao, Lani Dang, Jo Jo Gong, Minsuh Kim.</p>
            </footer>
        </div>
    )
}
