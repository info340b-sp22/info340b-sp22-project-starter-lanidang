export const filter_cards = (cards, formValues) => {
  console.log('filter cards', {cards});
  const r = cards.filter((card) => {
    let result = true;
    Object.keys(formValues).forEach((key) => {
      if (key === "price") {
        let t = card[key] >= Number(formValues[key]['min']) && card[key] <= Number(formValues[key]['max']);
        result = result && t;
      } else {
        result =
          result &&
          (formValues[key] === "All" ? true : formValues[key] === card[key]);
      }
    });
    return result;
  });
  // console.log('filter result', r);
  return r;
};

export const process_cards = (cards) =>
  
  cards.map((card, index) => ({
    id: index,
    imgUrl: card.imgUrl,
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
