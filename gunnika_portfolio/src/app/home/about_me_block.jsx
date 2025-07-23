"use client";
import React, { useState, useEffect } from 'react';


export default function AboutMe() {

  
  return (
    <div className="backgroundMediumPink w-full h-full mt-8 mb-8 flex flex-row relative outline-none ring-0">

        {/* Top left angled bracket on edge of rectangle */}
        <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-black"></div>

        {/* Styling for headshot picture: rectangular picture with white border */}
        <div className="w-48 h-auto mt-8 mb-12 ml-4 flex-shrink-0">
            <img 
                src="/images/Headshot.png" 
                alt="A square photo of an indian girl with long black hair in a blue button down shirt and white pants. She sits on a log with brown sand and the edge of the ocean in the background." 
                className="w-full h-full object-cover border-solid border-8 box-border border-white"
            />
        </div>

        <div className="flex flex-col ml-8 mr-8 mt-12 flex-1">

            {/* Text for heading and body of introduction */}
            <h2 className="textH2">
                Hi! I'm Gunnika.
            </h2>

            <p className="textBody mt-2">
                I am a fourth-year, computer science student at the University of Texas at Arlington with a passion for user-centric design and creating user experiences that are tailored to user needs. 
            </p>

            {/* Email, Google Scholar, and Linkedin icons that link to appropriate sites when clicked */}
            <div className="flex flex-row mt-4 mb-4 items-end mt-4 mb-4 space-x-6 ">
                <a href="mailto:gunnikak@outlook.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="/icons/email_icon.png" 
                        alt="A black icon in the shape of an envelope." 
                        className="w-8 h-8 cursor-pointer"
                    />
                </a>

                <a href="https://scholar.google.com/citations?user=WM0v7XIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="/icons/google_scholar_icon.png" 
                        alt="A black icon in the shape of a diploma." 
                        className="w-8 h-8 cursor-pointer"
                    />
                </a>

                <a href="https://www.linkedin.com/in/gunnika-kapoor" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="/icons/linkedin_icon.png" 
                        alt="A black rectangular icon with rounded edges. The letters in are in the center, translucent." 
                        className="w-8 h-8 cursor-pointer"
                    />
                </a>
            </div>
            

            {/* idk why but it is ONLY the justify-end that is causing issues */}
            {/* <div className="flex flex-row space-x-6 mt-4 mb-4 justify-end items-end">
                <a href="mailto:gunnikak@outlook.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="/icons/email_icon.png" 
                        alt="A black icon in the shape of an envelope." 
                        className="w-8 h-8 cursor-pointer"
                    />
                </a>
                
                <a href="https://scholar.google.com/citations?user=WM0v7XIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="/icons/google_scholar_icon.png" 
                        alt="A black icon in the shape of a diploma." 
                        className="w-8 h-8"
                    />
                </a>

                <a href="https://www.linkedin.com/in/gunnika-kapoor" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="/icons/linkedin_icon.png" 
                        alt="A black rectangular icon with rounded edges. The letters in are in the center, translucent." 
                        className="w-8 h-8"
                    />
                </a>
            </div> */}
        </div>
            

        {/* Bottom right angled bracket on edge of rectangle */}
        <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-black"></div>

    </div>
      
  );
}