'use client'
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home () {
    const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const randomX = Math.floor(Math.random() * windowWidth);
        const randomY = Math.floor(Math.random() * windowHeight);

        if (e.currentTarget instanceof HTMLButtonElement) {
          e.currentTarget.style.position = 'absolute';
          e.currentTarget.style.left = `${randomX}px`;
          e.currentTarget.style.top = `${randomY}px`;
        }
    }

    const name = "Adithya"

    const handleClick = () => {
        window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=Valentine with ${name}&details=chapa&location=dooby&dates=20240214T100700Z%2Fundefined`)
    }

    return (
        <div className="w-screen h-screen bg-pink-500 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
                <img src="https://i.giphy.com/cLS1cfxvGOPVpf9g3y.webp" className="object-cover h-80"/>
                <p className="font-bold text-xl text-white">Will you be my valentine?</p>
                <Button onClick={handleClick}>Yes!</Button>
                <Button onMouseEnter={handleHover}>No</Button>
            </div>
        </div>
    );
}
