"use client";
import React, { useState, useEffect } from 'react';
import UserBlock from './user_block'
import IntroBlock from './intro_block'
import BrainstormingBlock from './brainstorming_block'
import LowFidBlock from './low_fid_block'

export default function ForagerPage() {
  
  
  return (
    <div className="flex w-full h-full flex-col backgroundLightPink">
      {/* Introduction details about the forager project */}
      <div className="pt-16  ml-3 mr-3">
        <IntroBlock/>
      </div>
      
      <div className="w-full border-t-4 border-black mt-8"></div>

      {/* Block titled: 1. The User */}
      <div className = "flex flex-col mt-16 w-full ml-3 mr-3">
        <UserBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-8"></div>

      <div className = "flex flex-col mt-16 w-full ml-3 mr-3">
        <BrainstormingBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-8"></div>

      <div className = "flex flex-col mt-16 w-full ml-3 mr-3">
        <LowFidBlock/>
      </div>

      <div className="w-full border-t-4 border-black mt-16 mb-8"></div>

      {/* Padding Block to Push Everything Upwards */}
      <div className="pt-16"></div>

    </div>
      
  );
}