import React from "react";

export default function CompareTool({ selectedCards, cards }) {
  let sCardData = cards.length !== 0 ? selectedCards.map((i) => cards[i]) : [];
  console.log("render compareTool", { selectedCards, cards, sCardData });
  const display_fields = [
    "brand",
    "model",
    "os",
    "ram_gb",
    "processor_name",
    "price",
  ];
  const show_fields = [
    "Brand",
    "Model",
    "OS",
    "Ram",
    "Processor Name",
    "Latest Price",
  ];
  let content;
  if (sCardData.length === 0) {
    content = <div>No model selected</div>;
  } else {
    content = display_fields.map((f, i) => (
      <div key={i} className="w-full flex flex-col">
        <div className="px-3 py-2 flex-none w-full bg-slate-300 font-semibold">
          {show_fields[i]}
        </div>
        <div className="w-full flex justify-around">
          {sCardData.map((c, j) => (
            <div key={j} className="flex-1 p-3">
              {c[f]}
            </div>
          ))}
        </div>
      </div>
    ));
  }
  return (
    <main className="max-w-screen-md mx-auto">
      <div className="my-6 mx-4">
        <div className="flex gap-3">
          {sCardData.map((c, i) => (
            <div className="flex-1" key={i}>
              <img
                className="object-cover w-full h-52"
                src={c.imgUrl}
                alt={c.imgAlt}
              />
            </div>
          ))}
        </div>
        <div className="flex items-stretch mt-6">
          <div className="flex-1 flex flex-col">{content}</div>
        </div>
      </div>
    </main>
  );
}
