import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  //refs para o curso
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  //detectar se user está em disposivo móvel
  const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches

  if(isMobile) {return null}

  //atualizar posição do cursor
  useEffect(() => {
      // pegar cursor
      const cursor = cursorRef.current;
      const cursorBorder = cursorBorderRef.current;

      // atualizar cursor
      gsap.set([cursor, cursorBorder], {
        xPercent: -50,
        yPercent: -50
      })

      const xTo = gsap.quickTo(cursor, "x", {
        duration: 0.2, ease: "power3.out"
      })

      const yTo = gsap.quickTo(cursor, "y", {
        duration: 0.2, ease: "power3.out"
      })

      const xBorderTo = gsap.quickTo(cursorBorder, "x", {
        duration: 0.5, ease: "power.out"
      })

      const yBorderTo = gsap.quickTo(cursorBorder, "y", {
        duration: 0.5, ease: "power3.out"
      })

      // atualizar cursor ao passar o mouser
      const handleMouseMove = (e) => {
        xTo(e.clientX)
        yTo(e.clientY)
        xBorderTo(e.clientX)
        yBorderTo(e.clientY)
      }

      // adicionar mouser
      window.addEventListener("mousemove", handleMouseMove)

      // efeito de click
      document.addEventListener("mousemove", () => {
          gsap.to([cursor, cursorBorder], {
            scale: 0.6,
            duration: 0.2
          })
      })

      document.addEventListener("mouseup", () => {
          gsap.to([cursor, cursorBorder], {
            scale: 1,
            duration: 0.2
          })
      })

  } , [])

  return (
    <>
      {/* cursor principal */}
        <dev
            ref={cursorRef}
            className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
         />

        <div
            ref={cursorBorderRef}
            className="fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacyty-50"
         />
    </>
  )
}

export default CustomCursor
