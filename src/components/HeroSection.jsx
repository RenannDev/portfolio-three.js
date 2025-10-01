import {motion} from 'framer-motion'
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
        {/** Conteúdo esquerda */}
        <div className="z-40 xl:mb-0 mb-[20%]">
          <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            type: "spring",
            stiffness: 40,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 ">
            construindo resultados <br />rápidos e confiáveis
          </motion.h1>

          <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.8,
            type: "spring",
            stiffness: 40,
          }}
          className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus esse error hic placeat labore, iusto temporibus ratione nisi delectus reiciendis dignissimos? Nisi culpa nesciunt facere dolore, officiis ex illo?
          </motion.p>

        </div>

        {/** seção direita elemento 3d */}
          <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg-top-0'
          scene="https://prod.spline.design/E87WuUQq6SIhebUC/scene.splinecode" />
    </section>
 
  )
}

export default HeroSection
