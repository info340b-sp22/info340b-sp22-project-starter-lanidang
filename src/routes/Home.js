import React from "react";
import { CardList } from "../components/Card";
import { filter_cards } from "../util";
import { FilterBar } from "../components/FilterBar";
import filter_options from "../data/filter_options.json";

export default function Home({cards, setCards, displayCards, setDisplayCards, selectedCards, setSelectedCards, isLoading, setIsLoading}) {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(() => {
    const default_form_values = {};
    filter_options.forEach((f) => {
      default_form_values[f.name] = f.options[0];
    });
    return default_form_values;
  });

  console.log("render Home", { formValues, displayCards, cards });
  const closeFilter = () => {
    console.log("close filter");
    setFilterOpen(false);
  };
  const openFilter = () => {
    console.log("open filter");
    setFilterOpen(true);
  };
  const handleFormValueChange = (new_value) => {
    console.log("value changed", new_value);
    setFormValues((old) => ({ ...old, ...new_value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit", {formValues, cards});
    setFilterOpen(false);
    setDisplayCards(() => filter_cards(cards, formValues));
  };

  return (
    <main className="max-w-screen-lg mx-auto">
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-slate-100 text-xl py-2 px-16 rounded-2xl mt-4 transition duration-300 hover:bg-slate-300"
          onClick={openFilter}
        >
          Filter
        </button>
      </div>
      <FilterBar
        close={!filterOpen}
        closeFilter={closeFilter}
        onSubmit={handleSubmit}
        value={formValues}
        onChange={handleFormValueChange}
      />
      <div className="px-6 mt-4">
        <span>{displayCards.length} results found</span>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CardList cards={displayCards} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
      )}
    </main>
  );
}
