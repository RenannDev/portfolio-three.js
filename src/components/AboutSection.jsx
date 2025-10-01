import {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { div } from 'framer-motion/client';


const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    {/** Animação para o título */}
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: -300,
        duration: 0.8,
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            toggleActions: "play none none reverse",
        }
      } 
    )

    // intro animação 
    gsap.fromTo(
        introRef.current,
        {y: 100, opacity: 0, filter: "blur(10px)"},
        {
            y: -400,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                toggleActions: "play none none reverse",
            }
        }
    )

    //animação para estrelas movimentos em x e y
    starsRef.current.forEach((star, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const speed = 0.5 + Math.random() * 0.5;

        gsap.to(star, {
            x: `${direction * (100 + index * 20)}`,
            y: `${direction * -50 - index *10 }`,
            rotation: direction * 360,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: speed,
            }
        })
    })
    

    return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
            if(trigger.vars.trigger === sectionRef.current) {
                trigger.kill();
            }
        })
    }
  })

  const addToStars = (el) => {
    if(el && !starsRef.current.includes(el)) {
        starsRef.current.push(el);
    }
  }


  return (
    
      <section ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">

        <div className='absolute inset-0 overflow-hidden '>
            {/* estrelas*/}
            {[...Array(10)].map((_, i) => (
                <div
                ref={addToStars}
                key={`star-${+i}`}
                className='absolute rounded-full'
                style={{
                    width: `${10 + i * 3}px`,
                    height: `${10 + i * 3}px`,
                    backgroundColor: 'white',
                    opacity: 0.2 + Math.random() * 0.4,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                }}
                /> 
            ))}

        </div>

        <div className="container mx-auto h-full px-4 flex flex-col items-center justify-center">
            <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0">Sobre</h1>

        </div>

        <div
        ref={titleRef}
        className='absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0'>
            <h3 className='text-sm md:text-2xl font-bold text-purple-200 lg:max-[45rem] max-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, neque sed dicta nisi quisquam voluptate! Aliquam perspiciatis illo maxime, ducimus quo voluptates nesciunt dolores sint sed rem molestias dolorem totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quasi soluta impedit. Accusamus perferendis esse dolores facilis doloribus iusto soluta quibusdam assumenda ipsam pariatur, cupiditate laudantium, consequatur animi quisquam</h3>

            <img
            className='lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten'
            src="src/assets/images/person.png" alt="foto de perfil" />

        </div>

      </section>
    
  )
}

export default AboutSection
