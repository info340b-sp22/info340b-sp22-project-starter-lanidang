import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Card({
  imgUrl,
  imgAlt,
  brand,
  model,
  latest_price,
  infoItems,
  id,
  handleClick,
}) {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`details/${id}`)
  }

  return (
    <div
      className="bg-slate-100 rounded-xl flex flex-col align-stretch transition decoration-300 md:hover:bg-slate-200 md:hover:scale-105 overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      {/* <img className='object-cover h-52' src={"https://random.imagecdn.app/500/250"} alt={imgAlt} /> */}
      <img className="object-cover h-52" src={imgUrl} alt={imgAlt} />
      <div className="px-6 py-4 flex align-stretch">
        <div className="flex-1">
          <span className="">
            <span className="text-xl bg-slate-300 py-1 px-1 rounded-lg mr-1">
              {brand}
            </span>
            <span className="text-xl font-semibold">{model}</span>
          </span>
          <div className="font-bold text-lg text-blue-700">
            ${latest_price / 100}
          </div>
          <div className="mt-2 flex flex-col align-stretch text-sm">
            {infoItems.map((item, index) => (
              <div className="flex text-gray-500" key={index}>
                <div className="grow-0 shrink-0 w-24 font-bold">
                  {item.name}
                </div>
                <div className="flex-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex-none">
          <>
            <HiOutlinePlusCircle size={24} onClick={setSelectedCards} />
          </>
        </div> */}
      </div>
    </div>
  );
}

export function CardList({ cards, setSelectedCards }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("Closed popup");
    setShow(false);
  };

  return (
    <div className="p-6 gap-6 w-full grid grid-cols-1 md:grid-cols-3 auto-rows-[25rem]">
      {cards.map((card, index) => (
        <Card {...card} key={index} handleClick={setSelectedCards} />
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Added New Laptop</Modal.Header>
        <Modal.Body>
          {/* You have added {cardData.brand} {cardData.model} to the compare tool. */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
