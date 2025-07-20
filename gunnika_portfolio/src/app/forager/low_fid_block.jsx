"use client";
import React, { useState, useEffect } from 'react';


export default function LowFidBlock() {
  
  
  return (
    <div className="flex flex-col w-full h-full backgroundWhite mr-3">
        <h1 className = "flex justify-center textH1 backgroundWhite">
            3. Low Fidelity Prototyping
        </h1>

        <div className="flex flex-col justify-center space-y-8 mt-8">
            <img 
                src="/images/Basket_Metaphor.png" 
                alt="A block rgarding the basket metaphor with a flashcard, a written description, and sketched prototypes." 
                className="w-15/16 h-auto object-cover"
            />

            <img 
                src="/images/Flashcard_Metaphor.png" 
                alt="A block rgarding the flashcard metaphor with a flashcard, a written description, and sketched prototypes." 
                className="w-15/16 h-auto object-cover"
            />

            <img 
                src="/images/Foraging_Metaphor.png" 
                alt="A block rgarding the foraging metaphor with a flashcard, a written description, and sketched prototypes." 
                className="w-15/16 h-auto object-cover"
            />

            <img 
                src="/images/Field_Guides_Metaphor.png" 
                alt="A block rgarding the field guides metaphor with a flashcard, a written description, and sketched prototypes." 
                className="w-15/16 h-auto object-cover"
            />

            <img 
                src="/images/Alt_Formats_Metaphor.png" 
                alt="A block rgarding the alternative formats metaphor with a flashcard, a written description, and sketched prototypes." 
                className="w-15/16 h-auto object-cover"
            />

        </div>
        
    </div>
      
  );
}