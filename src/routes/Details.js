import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";

const example = [
  {
    brand: "Lenovo",
    model: "A6-9225",
    processor_brand: "AMD",
    processor_name: "A6-9225 Processor",
    processor_gnrtn: "10th",
    ram_gb: "4 GB GB",
    ram_type: "DDR4",
    ssd: "0 GB",
    hdd: "1024 GB",
    os: "Windows",
    os_bit: "64-bit",
    graphic_card_gb: 0,
    weight: "ThinNlight",
    display_size: "Missing",
    warranty: 0,
    Touchscreen: "No",
    msoffice: "No",
    latest_price: 24990,
    old_price: 32790,
    discount: 23,
    star_rating: 3.7,
    ratings: 63,
    reviews: 12,
  },
];

export default function Details({ cards, addToCompare }) {
  const { id } = useParams();

  const findCardById = (id) => {
    const r = cards.filter((c) => c.id === Number(id));
    if (r.length > 0) {
      return r[0];
    } else {
      return;
    }
  };

  const cardData = findCardById(id);

  console.log("render detail page", { id, cardData });

  let laptop_data1 = [
    ["Brand: " + cardData.brand],
    ["Model: " + cardData.model],
    ["Processor Brand: " + cardData.processor_brand],
    ["Processor Name: " + cardData.processor_name],
    ["RAM Size: " + cardData.ram_gb],
    ["Ram Type: " + cardData.ram_type],
    ["OS: " + cardData.os],
  ];

  let laptop_data2 = [
    ["OS Bit: " + cardData.os_bit],
    ["Weight: " + cardData.weight],
    ["Display Size: " + cardData.display_size],
    ["Warranty: " + cardData.warranty],
    ["Touchscreen: " + cardData.Touchscreen],
    ["MS Office: " + cardData.msoffice],
    ["Star Rating: " + cardData.star_rating],
  ];

  const listItems1 = laptop_data1.map((number) => (
    <div className="py-1">{number}</div>
  ));
  const listItems2 = laptop_data2.map((number) => (
    <div className="py-1">{number}</div>
  ));

  const [addCard, setAddCard] = useState([]);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log("Added laptop");
    let newCard = addCard.push;
    console.log("addCard push", newCard);

    setAddCard({ ...addCard, newCard });
    setShow(true);
  };

  const handleClose = () => {
    console.log("Closed popup");
    setShow(false);
  };

  const handleClickAdd = () => {
    addToCompare(cardData);
    setShow(true);
  };

  return (
    <div className="w-full h-full max-w-screen-xl mx-auto flex px-6 md:px-8 py-12">
      <div className="md:h-2/3 md:max-h-[40rem] flex flex-col items-stretch md:flex-row gap-8 md:gap-12">
        <img
          className="w-full md:w-1/2 flex-none rounded-lg object-cover"
          src={cardData.imgUrl}
          alt={`${cardData.brand} ${cardData.model}`}
        />
        <div className="flex-1 flex flex-col items-stretch ">
          <h1 className="font-bold">
            {cardData.brand} {cardData.model}
          </h1>
          <h2 className="font-bold text-blue-700">${cardData.price}</h2>
          <div className="mt-3 py-3 px-4 flex bg-slate-200 text-slate-600 rounded-xl">
            <div className="flex-1">{listItems1}</div>
            <div className="flex-1">{listItems2}</div>
          </div>
          <div className="pt-8">
            <button
              className="py-2 px-4 bg-blue-200 rounded-lg transition duration-300 hover:bg-blue-300"
              onClick={handleClickAdd}
            >
              Add to Compare Tool
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Added New Laptop</Modal.Header>
        <Modal.Body>
          You have added {cardData.brand} {cardData.model} to the compare tool.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img className="" src={cardData.imgUrl} alt={"Laptop"} />
          </div>

          <div className="col-md-6 col-sm-6 mb-50">
            <h1 className="font-bold">
              {cardData.brand} {cardData.model}
            </h1>
            <h2 className="font-bold text-blue-700">${cardData.price}</h2>

            <div className="mt-10">
              <ul>{listItems1}</ul>
              <ul>{listItems2}</ul>
            </div>
            <button
              type="button"
              className="mt-10 laptop_button"
              onClick={handleClick}
            >
              Add to Compare Tool
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>Added New Laptop</Modal.Header>
              <Modal.Body>
                You added {example[0].brand} to the compare tool.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
