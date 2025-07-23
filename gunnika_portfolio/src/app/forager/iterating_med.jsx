"use client";
import React, { useState, useEffect } from 'react';


export default function IteratingMedFidBlock() {
  
  
  return (
    <div className="flex flex-col w-full h-full backgroundWhite pr-3 pl-3">
        <h1 className = "flex justify-center textH1 backgroundWhite">
            5. Iterating on Prototype 1
        </h1>


        <div className="flex flex-col justify-center space-y-20 mt-16 pl-3 pr-3">
            <div className="flex flex-col justify-center space-y-12 pl-3 pr-3">
                <div className="flex flex-col justify-center space-y-4 pl-3 pr-3">
                    <h2 className = "textH2Bold">
                        Iteration 1:
                    </h2>

                    <p className="textBody">
                        I iterated on Prototype 1 by conducting an action cycle to better understand how, when using the application, users may form goals, execute actions, and interpret feedback. This helped identify gaps between user intentions and system responses, guiding improvements in usability.
                    </p>

                </div>

                <img 
                    src="/images/forager_action_cycle.png" 
                    alt="A block showing the action cycle conducted to iterate on prototype 1." 
                    className="w-full h-auto object-cover"
                />

                <p className = "textBody">
                    The Action cycle highlighted the need to more clearly specify the relationship between each edible and toxic mushroom pair. With that in mind, a revised prototype was created.
                </p>

                <img 
                    src="/images/forager_med_1_revised.png" 
                    alt="A block showing the action cycle conducted to iterate on prototype 1." 
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>

        <div className="flex flex-col justify-center space-y-20 mt-16 pl-3 pr-3">
            <div className="flex flex-col justify-center space-y-12 pl-3 pr-3">
                <div className="flex flex-col justify-center space-y-4 pl-3 pr-3">
                    <h2 className = "textH2Bold">
                        Iteration 2:
                    </h2>

                    <p className = "textBodyBold pt-12">
                        Critiques and Reflection
                    </p>

                    <p className="textBody">
                        During a class critique, the following comments were received (they have been rephrased for clarity):
                    </p>

                    <div className="pl-16">
                        <ul className="textBody list-disc">
                            <li>On a given page, it seems to imply that one singular mushroom can be both edible and toxic</li>
                            <li>During which phase of foraging is the application intended to be used? Poison control resources will not be useful during all of them?</li>
                        </ul>
                    </div>
                    

                    <p className = "textBodyBold pt-12">
                        User Interview
                    </p>

                    <p className="textBody">
                        I further interviewed a user who often uses flashcards, to gain insights on how to better communicate the flashcard metaphor. She mentioned the following.
                    </p>

                    <div className="pl-16">
                        <ul className="textBody list-disc">
                            <li>The heart icon doesn't communicate “saved” for flashcards. It seems more “positive”. </li>
                            <li>A “flag” might better communicate that they are being saved.</li>
                            <li>Additionally, rewording my mushrooms to something like “my collection” might be a better rewrite.</li>
                        </ul>
                    </div>

                    <p className="textBody pt-12">
                        As such, 
                    </p>

                    <div className="pl-16">
                        <ol className="textBody list-decimal">
                            <li>The next iteration of the prototype will use a wording and layout that more intuitively reflects the fact that the mushrooms come in a pair.</li>
                            <li>The wording and design of the application will more effectively indicate that the application is intended to be used such that: Chantelle adds mushrooms to her list <span className="underline">before foraging</span> and is able to view “Her Mushrooms” <span className="underline">while foraging</span>.</li>
                        </ol>
                    </div>
                </div>

                <img 
                    src="/images/forager_med_1_final.png" 
                    alt="A block showing the final medium prototype." 
                    className="w-full h-auto object-cover"
                />
            </div>

            
        </div>
        
    </div>
      
  );
}