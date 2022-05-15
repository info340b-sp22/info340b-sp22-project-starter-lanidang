import React from 'react';
import {Menu} from './Navigation';
import {FilterBar} from './FilterBar';

export function App() {
    return (
        <div className="body-container">
            <header>
                <Menu />
            </header>
            <FilterBar />
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