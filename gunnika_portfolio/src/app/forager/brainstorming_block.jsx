"use client";
import React, { useState, useEffect } from 'react';


export default function BrainstormingBlock() {
  
  
  return (
    <div className="flex flex-col w-full h-full backgroundWhite">
        <h1 className = "flex justify-center textH1 backgroundWhite">
            2. Brainstorming
        </h1>

        <div className="flex flex-col space-y-8 mt-16">
            <p className="textBodyBold">
                Functionalities the Interface Should Provide
            </p>

            <img 
                src="/images/forager_functionalities_1.png" 
                alt="A list of teal postcards with various descriptions of functionalities the interface could provide." 
                className="w-full h-auto bject-cover"
            />
        </div>
        
        <div className="flex flex-col space-y-8 mt-16">
            <p className="textBodyBold">
                Potential Interface Metaphors
            </p>

            <p className="textBody">
                There are many ways this interface can aid in identifying toxic and edible mushrooms. As such, various metaphors can be used to communicate these ideas.
            </p>

            <img 
                src="/images/forager_metaphors_1.png" 
                alt="A list of teal postcards with various descriptions of metaphors the interface could provide." 
                className="w-full h-auto bject-cover"
            />
        </div>
        

    </div>
      
  );
}