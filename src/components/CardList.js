import React from 'react';
import { Card } from './Card';

export function CardList({cards}) {
  <div class="card-list-container">
    {card.map((card, index) => (
      <Card {...card} key={index} />
    ))}
  </div>
}