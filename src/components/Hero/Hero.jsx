import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import './Hero.css';
import cartoonImg from '../../assets/Images/cartoon.png';
import SplitText from "../SplitText/SplitText";

const Hero = () => {
  return (
    <>
      <section className='hero-container' id='hero'>
        <div className='hero-content'>
          <SplitText
            text="Hello, I'm Kowshikk"
            className="hero-heading"
            splitType="chars" 
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            delay={50}
            duration={0.8}
            tag="h2"
          />

          <p>Python Full Stack Developer & Creative Technologist</p>
          <p>Crafting digital experiences with modern web technologies</p>

          <div className="hero-buttons">
            <button><a href="#projects">View My Work</a></button>
            <button><a href="#contact">Get In Touch</a></button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-down flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors mt-6 cursor-pointer"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            <span className="text-sm mb-2">Scroll Down</span><br />
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>

        <motion.div 
          className='hero-img'
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}    
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <div className="hero-cards">
            <img src={cartoonImg} alt="cartoon" />
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero;
