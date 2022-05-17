import React from 'react';
import { Header } from './components/Header';
import { CardList } from './components/Card';
import { Footer } from './components/Footer';
import data from './data/Cleaned_Laptop_data.json';
import { HiOutlineX } from 'react-icons/hi';
import { FilterBar } from './components/FilterBar';
import filter_options from './data/filter_options.json';

const navItems = [
  { text: 'Home', href: '#home' },
  { text: 'Take Test', href: '#takeTest' },
  { text: 'Compare Tool', href: '#compareTool' },
]

const cards = data.slice(0, 18).map((card) => ({
  imgUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  imgAlt: 'Laptop',
  title: card.brand + " " + card.model,
  price: card.latest_price,
  infoItems: [{ name: 'RAM', value: card.ram_gb },
  { name: 'OS', value: card.os },
  { name: 'Weight', value: card.weight },
  { name: 'Processor', value: card.processor_name }]
}))

const default_form_values = {};
filter_options.forEach((f) => {
  default_form_values[f.label] = f.options[0];
})

function App() {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(default_form_values);
  const closeFilter = () => {
    console.log('close filter')
    setFilterOpen(false);
  }
  const openFilter = () => {
    console.log('open filter')
    setFilterOpen(true);
  }
  const handleFormValueChange = (new_value) => {
    console.log('value changed', new_value);
    setFormValues(old => ({...old, ...new_value}));
  }
  const handleSubmit = () => {
    console.log('form submit', formValues);
  }
  return (
    <>
      <Header navItems={navItems} />
      <button onClick={openFilter}>Filter</button>
      <FilterBar 
        close={!filterOpen} 
        closeFilter={closeFilter} 
        onSubmit={handleSubmit} 
        value={formValues} 
        onChange={handleFormValueChange}
      />
      <CardList cards={cards} />
      <Footer />
    </>
  );
}

export default App;
