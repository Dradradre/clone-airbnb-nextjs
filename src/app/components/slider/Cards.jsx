'use client';

import React from "react";
import CardImageBox from "./CardImageBox";

export default function Cards({ accommodationInfo }) {
  return (
    <div className="card ">
      <ul className="card-wrap grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {accommodationInfo.map((item) => (
          <li className="card-item p-2" key={item.accommodationId}>
            <CardImageBox images={item.imageUrl} />
            <div className="txt mt-4 text-black">
              <h3 className="title text-md font-semibold">{item.accommodationName}</h3>
              <div className="host text-gray-600">
                <p>호스트: {item.hostName} 님</p>
              </div>
              <span className="price text-md font-bold">${item.pricePerDay}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}