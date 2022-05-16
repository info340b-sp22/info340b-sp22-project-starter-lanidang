import React from "react";

export function Card({ imgUrl, imgAlt, title, price, infoItems }) {
  return (
    <div class="card">
      < img src={imgUrl} alt={imgAlt} />
      <div class="card-content">
        <div class="card-main-content">
          <span class="card-title">{title}</span>
          <p class="card-price">{price}</p >
          <div class="card-extrainfo-container">
            <div class="info-item">
              {infoItems.map((item, index) => (
                <div class="info-item" key={index}>
                  <div class="info-name">{item.name}</div>
                  <div class="info-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="card-content-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}