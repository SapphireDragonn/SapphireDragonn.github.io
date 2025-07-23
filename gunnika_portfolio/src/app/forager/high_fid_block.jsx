"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function HighFidBlock() {
    const [play, setPlay] = useState(false);
  
  
  return (
    <div className="flex flex-col w-full h-full backgroundWhite pr-3 pl-3">
        <h1 className = "flex justify-center textH1 backgroundWhite">
            4. High Fidelity Prototyping
        </h1>

        <div className="flex flex-col justify-center space-y-20 mt-16 pl-3 pr-3">
            <div className="flex flex-col justify-center space-y-12 pl-3 pr-3">
                <div className="flex flex-col justify-center space-y-4 pl-3 pr-3">
                    <p className = "textBody">
                        This app provides Chantelle with aid before and during foraging. She can go into all mushrooms to view mushrooms stored in edible and toxic mushroom pairs. In these pairs, an edible mushroom is paired with a toxic mushroom lookalike that foragers may mistake the edible one for.
                    </p>

                    <h2 className="textH2Bold">
                        Design Elements:
                    </h2>

                </div>

                <img 
                    src="/images/forager_design_elements.png" 
                    alt="A block showing the design elements used for the high fidelity prototype." 
                    className="w-full h-auto object-cover"
                />
            </div>

            <h2 className = "textH2Bold pt-12">
                High Fidelity Prototype:
            </h2>

            <div className="flex flex-col justify-center pt-8 pl-3 pr-3">
                <img 
                    src="/images/forager_final.png" 
                    alt="A block showing the various screens in the high fidelity forager prototype for the flashcard metaphor." 
                    className="w-full h-auto object-cover"
                />
            </div>

            <h2 className = "textH2Bold pt-12">
                Video Walkthrough
            </h2>

            {/* Youtube Video Walkthrough */}
            <div className="w-full cursor-pointer flex flex-col justify-center space-y-12 pl-3 pr-3" onClick={() => setPlay(true)}>
                {!play ? (
                    <img
                        src="/images/forager_video.png"
                        alt="YouTube video thumbnail for forager walkthrough"
                        className="w-full h-auto object-cover"
                    />
                ) : (
                    <iframe
                    width="100%"
                    height="360"
                    src="images/forager_walkthrough.mp4"
                    title="YouTube video player for forager walkthrough"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    />
                )}
            </div>

            {/* <div className="flex flex-col justify-center space-y-12 pl-3 pr-3">
                <Link href={`/${item.route}`}>
                    <a>
                        <img
                        src="/images/forager_video.png"
                        alt="A block showing the various screens in the medium fidelity forager prototype for the field guide metaphor."
                        className="w-full h-auto object-cover"
                        />
                    </a>
                </Link>
            </div> */}
        </div>
        
    </div>
      
  );
}