"use client";
import React, { useState, useEffect } from 'react';


export default function UserBlock() {
  
  
  return (
    <div className="w-full h-full backgroundWhite">
        <h1 className = "flex justify-center textH1 backgroundWhite">
            1. The User
        </h1>

        <div className = "flex flex-row w-full mt-16">
            <div className="w-1/2">
            <div className = "flex flex-col">
                <h2 className="textH2">
                Chantelle
                </h2>
                <div className="pt-2">
                <img 
                    src="/images/Chantelle_Pic.png" 
                    alt="A brunette woman in a long sleeved black shirt and black leggings sitting cross-legged in a forest." 
                    className="h-76"
                />
                </div>
            </div>

            </div>
            

            <div className="flex flex-col w-1/2 pl-3 pt-8">
            <div className="flex flex-col space-y-2">
                <p className="textBodyBold">Who She Is:</p>
                <ul className="list-disc list-inside textBody">
                <li>Chantelle is an experienced mushroom forager who lives in Texas.</li>
                <li>She commonly consults maps, field guides, online resources, weather patterns, and soil conditions while foraging.</li>
                </ul>
            </div>
            

            <div className="flex flex-col space-y-2 pt-8">
                <p className="textBodyBold">Needs and Concerns:</p>
                <ul className="list-disc list-inside textBody">
                <li>Foraging safely</li>
                <li>Foraging without consulting a large and varied number of resources</li>
                <l1>Connecting with others in the foraging community</l1>
                </ul>
            </div>
            </div>

        </div>
    </div>
      
  );
}