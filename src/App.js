import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import TakeTest from "./routes/TakeTest";
import CompareTool from "./routes/CompareTool";
import { process_cards, filter_cards } from "./util";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const pageSize = 25;
  const [isLoading, setIsLoading] = React.useState(true);
  const [cards, setCards] = React.useState([]);
  const [displayCards, setDisplayCards] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([82, 122]);

  React.useEffect(() => {
    console.log("initial App render");
    window.addEventListener("scroll", handleScroll);
    setIsLoading(true);
    fetch("/Cleaned_Laptop_data.json")
      .then((res) => res.json())
      .then((data) => {
        const processed_data = process_cards(data);
        setCards(process_cards(processed_data));
        // setDisplayCards(() => filter_cards(processed_data, formValues));
        setDisplayCards(() => processed_data);
        setIsLoading(false);
      });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
  }

  const navItems = [
    {
      text: "Home",
      href: "/",
      component: (
        <Home
          cards={cards}
          setCards={setCards}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          displayCards={displayCards.slice(0, 55)}
          setDisplayCards={setDisplayCards}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ),
    },
    {
      text: "Take Test",
      href: "/takeTest",
      component: <TakeTest selectedCards={selectedCards} />,
    },
    { text: "Compare Tool", href: "/compareTool", component: <CompareTool selectedCards={selectedCards} cards={cards} /> },
  ];

  console.log("render App", { cards });

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <Header navItems={navItems} />
        <Routes>
          {navItems.map((item, index) => (
            <Route key={index} path={item.href} element={item.component} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
