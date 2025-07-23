"use client";
import React, { useState, useEffect } from 'react';


export default function PortfolioItem({portfolioItem}) {

  
  return (
    <div className={`w-full h-full pt-4 pb-4 flex flex-row items-center ${portfolioItem.backgroundColor} justify-center`}>
        <div className=" w-1/2 flex flex-col ml-16 mr-8 mt-8 mb-8">

            {/* Text for heading and body of portfolio item */}
            <h2 className="textH2">
                {portfolioItem.heading}
            </h2>

            <p className="textBody mt-2">
                {portfolioItem.body}
            </p>

        </div>

        {/* Styling for portfolio item picture: rectangular picture with white border */}
        <div className="w-1/2 flex items-center justify-center p-4">
            {portfolioItem.img}
        </div>

    </div>
      
  );
}