"use client";
import React, { useState, useEffect } from 'react';


export default function MedFidBlock() {
  
  
  return (
    <div className="flex flex-col w-full h-full backgroundWhite pr-3 pl-3">
        <h1 className = "flex justify-center textH1 backgroundWhite">
            4. Medium Fidelity Prototyping
        </h1>

        <div className="flex flex-col justify-center space-y-20 mt-16 pl-3 pr-3">
            <div className="flex flex-col justify-center space-y-12 pl-3 pr-3">
                <div className="flex flex-col justify-center space-y-4 pl-3 pr-3">
                    <p className = "textBodyBold">
                        Prototype 1:  The “Flashcard” Metaphor
                    </p>

                    <p className="textBody">
                        This prototype explores the idea of the “flashcard” metaphor. It does so by storing different species in flashcard-like cards. Additionally, Flash card apps have the idea of “known” vs “all” Similarly, this separates the user's saved mushrooms and the total set of all mushrooms.
                    </p>

                </div>

                <img 
                    src="/images/forager_med_fid_1_original.png" 
                    alt="A block showing the various screens in the medium fidelity forager prototype for the flashcard metaphor." 
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="flex flex-col justify-center space-y-12 pl-3 pr-3">
                <div className="flex flex-col justify-center space-y-4 pl-3 pr-3">
                    <p className = "textBodyBold">
                        Prototype 2:  The "Field Guide" Metaphor
                    </p>

                    <p className="textBody">
                        This prototype explores the idea of the “field guide” metaphor. It does so using the idea of a book-like design. Users can save specific species similarly to how they can bookmark a page. Additionally, mushroom pages have field-guide-like illustrations and an overall design that is reminiscent of the guides Chantelle usually consults.
                    </p>

                </div>

                <img 
                    src="/images/forager_med_2.png" 
                    alt="A block showing the various screens in the medium fidelity forager prototype for the field guide metaphor." 
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
        
        <p className = "textBodyBold mt-20">
            Chosen Prototype
        </p>

        <p className = "textBody mt-4">
            Prototype 1: The “Flashcard” Metaphor is the one that was chosen to be further developed. Firstly, during class peer reviews, it received more comments from fellow classmates and received a more positive response. Additionally, I believe it is a simpler interaction, and exposes necessary information efficiently and simply, which is essential while Chantelle is foraging.
        </p>
        
        
    </div>
      
  );
}