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
    <div className="flex flex-col w-full h-full backgroundLightPink">

      {/* About me block */}
      <div className="mt-16 ml-3 mr-3">
        <AboutMe/>
      </div>

      {/* Dividing line */}
      <div className="w-full h-0.5 bg-black mt-16">
      </div>

      <div className="backgroundWhite">
        <h1 className="textH1 mt-8 ml-3">
          PORTFOLIO
        </h1>

        
        {/* Portfolio Items with Dividing Lines */}

        <div className="mt-8 ml-3 mr-3">
          <div className="w-full border-t border-dashed border-black mt-8 mb-8"></div>

          <div className="w-full h-full">

            {portfolioItems.map((item, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <div className="w-full h-full border-t border-dashed border-black mt-8 mb-8"></div>
                )}
                
                {/* <Link href={`/${item.route}`}>
                  <a className="block hover:cursor-pointer">
                    <PortfolioItem portfolioItem={item} />
                  </a>
                </Link> */}
                <Link href={`/${item.route}`}>
                  <PortfolioItem portfolioItem={item} />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

        
        {/* Buffer div to add space to the bottom */}
        <div className="pt-16">

        </div>



      </div>
      


    </div>
      
  );
}