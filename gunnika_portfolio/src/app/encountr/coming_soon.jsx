"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";


export default function ComingSoon() {
  
  
  return (
    <div className="flex w-full h-full flex-col backgroundBlack">
        <div className="pt-16 pl-32">
            <Link href={`/home`}>
                <img
                    src="/icons/home_icon_white.png"
                    alt="Home Icon"
                    className="w-14 h-14 cursor-pointer"
                />
            </Link>
        </div>

        <h1 className="flex textH1White justify-center items-center pt-32">
            Coming Soon!
        </h1>
    </div>
      
  );
}