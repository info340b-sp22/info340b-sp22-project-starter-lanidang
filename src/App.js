import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import TakeTest from "./routes/TakeTest";
import CompareTool from "./routes/CompareTool";
import { process_cards, filter_cards } from "./util";
import { Result } from "./routes/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

function App() {
  const pageSize = 25;
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  // const [selectedCards, setSelectedCards] = useState([82, 122]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    console.log("initial App render");
    window.addEventListener("scroll", handleScroll);
    setIsLoading(true);
    setAlertMessage(null);

    fetch("/Cleaned_Laptop_data.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setAlertMessage("No results listed.");
        }
        const processed_data = process_cards(data);
        setCards(process_cards(processed_data));
        // setDisplayCards(() => filter_cards(processed_data, formValues));
        setDisplayCards(() => processed_data);
        setIsLoading(false);
      })
      .catch((error) => setAlertMessage(error.message));
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

  function handleSelect(addCard) {
    setSelectedCards([...selectedCards, addCard]);
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
          setSelectedCards={handleSelect}
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

        {alertMessage &&
          <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
        }

        <Routes>
          {navItems.map((item, index) => (
            <Route key={index} path={item.href} element={item.component} />
          ))}
          <Route path="/test_result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
