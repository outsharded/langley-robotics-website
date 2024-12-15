"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import logo from '../public/pink_logo.webp'

const Banner: React.FC = () => {
  return (
    <div className="z-20 sticky font-bold font-avenir text-md top-0 opacity-90 bg-powercut_pink_contrast p-4 flex items-center justify-center h-12 col-span-1 text-center">
        <h1 className="text-2xl md:text-3xl grow ">2024 UK Think Award Winner</h1>
      
    </div>
  );
};

export default Banner;
