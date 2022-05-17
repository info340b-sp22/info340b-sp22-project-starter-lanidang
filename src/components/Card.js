import React from "react";
import { HiOutlinePlusCircle } from 'react-icons/hi';

export function Card({ imgUrl, imgAlt, title, price, infoItems }) {
  return (
    <div className="bg-slate-100 rounded-xl flex flex-col align-stretch transition decoration-300 md:hover:bg-slate-200 md:hover:scale-105 overflow-hidden">
      {/* <img className='object-cover h-52' src={"https://random.imagecdn.app/500/250"} alt={imgAlt} /> */}
      <img className='object-cover h-52' src={imgUrl} alt={imgAlt} />
      <div className="px-6 py-4 flex align-stretch">
        <div className="flex-1">
          <span className="font-bold text-xl">{title}</span>
          <p className="font-bold text-lg text-blue-700">${price}</p >
          <div className="mt-2 flex flex-col align-stretch text-sm">
            {infoItems.map((item, index) => (
              <div className="flex text-gray-500" key={index}>
                <div className="grow-0 shrink-0 w-24 font-bold">{item.name}</div>
                <div className="flex-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-none ">
          <HiOutlinePlusCircle size={24} />
        </div>
      </div>
    </div>
  );
}


export function CardList({ cards }) {
  return (
    <div className="p-6 gap-6 w-full grid grid-cols-1 md:grid-cols-3 auto-rows-[25rem]">
      {cards.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </div>
  )
}