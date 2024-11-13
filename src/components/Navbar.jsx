import { useState } from 'react';
import PortalPopup from './PortalPopup';
import gsap from 'gsap'; // Import GSAP
import { useGSAP } from '@gsap/react';

const Navbar = () => {

    //gsap.registerPlugin(ScrollTrigger);
  	const [isFrameOpen, setFrameOpen] = useState(false);

    useGSAP(() => {
        var t1 = gsap.timeline();
        if (isFrameOpen) {
            t1.to(".menu", {
            x: 0, // Slide in from the side
            duration: 0.5,
            ease: "power2.out",
            });
        } else {
            t1.to(".menu", {
            x: "100%", // Slide out to the side
            duration: 0.5,
            ease: "power2.in",
            });
        }
    }, [isFrameOpen]);
    
  	const openFrame = () => {
    	setFrameOpen(true);
        //play()
  	};
  	
  	const closeFrame = () => {
    	setFrameOpen(false);
        //reverse()
  	};
  	
  	return (
    <div className='pt-3 w-[1242px] z-10 relative'>
        <div className="fixed left-[53px] right-[53px] [backdrop-filter:blur(15px)] rounded-[7px] bg-dimgray flex items-center justify-between py-[7px] px-[53px] box-border text-left text-[25px] text-white font-[pricedown]">
            <div className="font-black">SportSpotter</div>
            <img className="w-9 h-[16.5px] cursor-pointer" alt="" src='./src/assets/Menu.svg' onClick={openFrame}/>
        </div>
        <div className='menu fixed right-[0] top-0 bottom-0' style={{ transform: 'translateX(100%)' }}>
            <PortalPopup closeFrame={closeFrame} />
        </div>
    </div> 
    );
};

export default Navbar;