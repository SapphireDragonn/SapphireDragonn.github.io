"use client";
import React, { useState, useEffect } from 'react';


export default function IntroBlock() {
  
  
  return (
    <div className="w-full h-full backgroundLightPink">
        <div className = "flex justify-center w-full">
            <h1 className="textH1">
                Forager
            </h1>
        </div>

        {/* Intro Block with Project Overview */}
        <div className = "flex flex-row w-full mt-16">
            <div className = "flex flex-col w-1/2">

                <div className = "flex flex-col space-y-5">
                    <div className = "flex flex-col space-y-1">
                    <h2 className = "textH2">
                        Course:
                    </h2>
                    <p className = "textBody">
                        Human-Computer Interaction
                    </p>
                    </div>
                    
                    <div className = "flex flex-col space-y-1">
                    <h2 className = "textH2">
                        Timeline:
                    </h2>
                    <p className = "textBody">
                        January, 2025 - March, 2025
                    </p>
                    </div>

                    <div className = "flex flex-col space-y-1">
                    <h2 className = "textH2">
                        Problem Statement:
                    </h2>
                    <p className = "textBody">
                        Forager is a mushroom forager's guide to identifying toxic and edible mushrooms. During the summer foraging season, it can be easy to mistake edible mushrooms of interest with their toxic mushroom counterparts, which leaves foragers cross-referencing field guides and online resources.
                    </p>
                    <p className = "textBody">
                        How can this information be presented in an easily accessible and concise format to provide foragers with aid both before and during foraging?
                    </p>
                    </div>
                    
                </div>
            </div>

            <div className = "flex justify-end w-1/2">
                <img 
                    src="/images/Forager_Page_Intro.png" 
                    alt="A screenshot of an application page with a picture of a shaggy inkcap mushroom from a foraging deck. It is labeled as edible with a source for more information. The center shows the mushroom (white with a black rimmed cap) and characteristics around the edges. Left and right arrows line the edges and below the image are a trash can icon, a flip icon, and a comment icon." 
                    className="h-auto"
                />
            </div>

        </div>  
    </div>
      
  );
}