import React from "react";
import { Header } from "./components/Header";
import { CardList } from "./components/Card";
import { Footer } from "./components/Footer";
import data from "./data/Cleaned_Laptop_data.json";
import { HiOutlineX } from "react-icons/hi";
import { FilterBar } from "./components/FilterBar";
import filter_options from "./data/filter_options.json";

const navItems = [
  { text: "Home", href: "#home" },
  { text: "Take Test", href: "#takeTest" },
  { text: "Compare Tool", href: "#compareTool" },
];

const cards_data = data.map((card) => ({
  imgUrl:
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  imgAlt: "Laptop",
  ...card,
  infoItems: [
    { name: "RAM", value: card.ram_gb },
    { name: "OS", value: card.os },
    { name: "Weight", value: card.weight },
    { name: "Processor", value: card.processor_name },
  ],
}));

const default_form_values = {};
filter_options.forEach((f) => {
  default_form_values[f.name] = f.options[0];
});

function App() {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(default_form_values);
  const [cards, setCards] = React.useState([]);
  const [displayCards, setDisplayCards] = React.useState([]);
  console.log("render app", { formValues: formValues });
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
    console.log("form submit", formValues);
    const fn = (card) => {
      let result = true;
      Object.keys(formValues).forEach((key) => {
        if (key === "price") {
          result = result;
        } else {
          result =
            result &&
            (formValues[key] === "All" ? true : formValues[key] === card[key]);
        }
      });
      return result;
    };
    setFilterOpen(false);
    setDisplayCards(() => cards.filter(fn));
  };

  React.useEffect(() => {
    setCards(cards_data);
  }, []);

  React.useEffect(() => {
    setDisplayCards(cards);
  }, [cards]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <Header navItems={navItems} />
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
        {displayCards.length === 0 ? (
          <div className="py-10 flex justify-center items-center">
            <span className="text-red-600 text-3xl italic py-4 px-8 bg-red-100 rounded-xl">
              What the heck are you think you're doing
            </span>
          </div>
        ) : (
          <CardList cards={displayCards} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
