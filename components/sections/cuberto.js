import React from 'react'
import Button from '../Button/Button'

export default function Cuberto() {
  return (
    <div className="flex w-[74%] mx-auto mb-25 justify-between items-center ">
        <video
            src="/asserts/videos/1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hidden sm:block w-[500px] h-[500px]  object-cover "
        />

        <div className='space-y-15'>
            <p className="text-xl sm:text-xl lg:text-3xl">Cuberto is a leading digital product 
            agency focused on branding, UI/UX 
            design, mobile, and web
            development.</p>

            <Button width="100%" lgWidth={420} height={200} text={"What we do"} ></Button>
        </div>
      
    </div>
  )
}
