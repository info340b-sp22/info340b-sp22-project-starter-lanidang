export const filter_cards = (cards, formValues) => {
  console.log('filter cards', {cards});
  return cards.filter((card) => {
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
  });
};

export const process_cards = (cards) =>
  cards.map((card, index) => ({
    id: index,
    imgUrl:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    imgAlt: "Laptop",
    price: card.latest_price / 100,
    ...card,
    infoItems: [
      { name: "RAM", value: card.ram_gb },
      { name: "OS", value: card.os },
      { name: "Weight", value: card.weight },
      { name: "Processor", value: card.processor_name },
    ],
  }));
