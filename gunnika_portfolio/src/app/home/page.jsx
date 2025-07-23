"use client";
import React, { useState, useEffect } from 'react';
import AboutMe from './about_me_block'
import PortfolioItem from './portfolio_item'
import Link from "next/link";



export default function HomePage() {
  // Forager portfolio item details

  const Forager = {
    route: "forager",
    heading: "Forager",
    body: "Forager helps mushroom foragers of all experience levels have a safe foraging experience. Edible and toxic mushrooms often appear nearly identical, aside from a few defining characteristics. Select mushrooms of interest, learn more about them, and connect with local foraging communities.",
    img: <img 
                src="/images/Home_Page_Forager.png" 
                alt="A screenshot of an application page with a picture of a shaggy inkcap mushroom from a foraging deck. It is labeled as edible with a source for more information. The center shows the mushroom (white with a black rimmed cap) and characteristics around the edges. Left and right arrows line the edges and below the image are a trash can icon, a flip icon, and a comment icon." 
                className="w-50 h-80 bject-cover border-solid border-8 box-border border-white"
            />,
    backgroundColor: "backgroundDarkPink",
    outerRectangleColor: "backgroundMediumPink"
  };

  // Encountr portfolio item details
  const Encountr = {
    route: "encountr",
    heading: "Encountr",
    body: "Encountr connected Pokémon players of all experience levels with an AI-powered, intelligent Research Assistant to explore methods for encountering Pokémon in the video game.",
    img: <img 
                src="/images/home_page_encountr.png" 
                alt="A screenshot of an application. A character in a blue coat and blue cape stands in front of a purple library. The title Encountr is in the top left corner. Below those images are a welcoming message and a text input box." 
                className="w-100 h-60 object-cover border-solid border-8 box-border border-white"
            />,
    backgroundColor: "backgroundMediumPink",
    outerRectangleColor: "backgroundDarkPink"
  };

  const portfolioItems = [Forager, Encountr];

  
  return (
    <div className="flex flex-col w-full min-h-screen backgroundLightPink">

      {/* About Me block inside max-width container */}
      <div className="max-w-screen-xl mx-auto px-12 mt-16">
        <AboutMe/>
      </div>

      {/* Full width dividing line */}
      <div className="w-full h-0.5 bg-black mt-16"></div>

      {/* Portfolio Section */}
      <div className="backgroundWhite">

        {/* Header constrained in max-width container */}
        <div className="max-w-screen-xl mx-auto px-12">
          <h1 className="textH1 mt-8">
            PORTFOLIO
          </h1>
        </div>

        {/* Full width dashed line */}
        <div className="max-w-screen-xl mx-auto px-12 border-t border-dashed border-black mt-8 mb-8"></div>

        {/* Portfolio Items constrained container */}
        <div className="max-w-screen-xl mx-auto px-12 min-h-screen">
          {portfolioItems.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                // Full width dashed line between items
                <div className="border-t border-dashed border-black mt-8 mb-8"></div>
              )}
              <Link href={`/${item.route}`}>
                <PortfolioItem portfolioItem={item} />
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Optional full width dividing line at bottom */}
        <div className="max-w-screen-xl mx-auto border-t border-dashed border-black mt-16 mb-8"></div>

        {/* Buffer padding */}
        <div className="pt-16"></div>

      </div>

    </div>

      
  );
}