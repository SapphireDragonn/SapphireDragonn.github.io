"use client";
import React, { useState, useEffect } from 'react';
import UserBlock from './user_block'
import IntroBlock from './intro_block'
import BrainstormingBlock from './brainstorming_block'
import LowFidBlock from './low_fid_block'
import MedFidBlock from './med_fid_block'
import IteratingMedFidBlock from './iterating_med'
import HighFidBlock from './high_fid_block'
import Link from "next/link";


export default function ForagerPage() {
  
  
  return (
    <div className="flex w-full h-full flex-col backgroundLightPink">
      <div className="max-w-screen-xl pt-16 pl-32">
        <Link href={`/home`}>
          <img
              src="/icons/home_icon.png"
              alt="Home Icon"
              className="w-14 h-14 cursor-pointer"
          />
        </Link>
      </div>

      {/* Introduction details about the forager project */}
      <div className="max-w-screen-xl mx-auto flex pt-16 backgroundLightPink">
        <IntroBlock/>
      </div>
      
      <div className="w-full border-t-4 border-black mt-16"></div>

      {/* Block titled: 1. The User */}
      <div className = "max-w-screen-xl mx-auto flex flex-col mt-16">
        <UserBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-20 mb-8"></div>

      {/* Block titled: 2. Brainstorming */}
      <div className = "max-w-screen-xl mx-auto flex flex-col mt-16">
        <BrainstormingBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-8"></div>

      {/* Block titled: 3. Low Fidelity Prototyping */}
      <div className = "max-w-screen-xl mx-auto flex flex-col mt-16">
        <LowFidBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-8"></div>

      {/* Block titled: 3. Medium Fidelity Prototyping */}
      <div className = "max-w-screen-xl mx-auto flex flex-col mt-16">
        <MedFidBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-16"></div>

      <div className = "max-w-screen-xl mx-auto flex flex-col mt-16">
        <IteratingMedFidBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-16"></div>

      <div className = "max-w-screen-xl mx-auto flex flex-col mt-16">
        <HighFidBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-16"></div>

      {/* Padding Block to Push Everything Upwards */}
      <div className="mt-16"></div>

    </div>
      
  );
}