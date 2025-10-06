import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
    // menu para mobile
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // state para formulario de contato 
    const [contactFormOpen, setContactFormOpen] = useState(false);

    const openContactForm = () => {
        setContactFormOpen(true);
    };  
    const closeContactForm = () => {
        setContactFormOpen(false);
    };

    return (
        <header className="absolute w-full transition-all duration-300 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                {/** Logo/Name */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.5,
                    }}
                    className="flex items-center"
                >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                        VR
                    </div>

                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        Vitor R. Dev
                    </span>
                </motion.div>

                {/** computador navegação */}
                <nav className="lg:flex hidden space-x-8">
                    {["Inicio", "Sobre", "Projetos", "Contato"].map(
                        (item, idx) => (
                            <motion.a
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    delay: 0.7 + idx * 0.2,
                                }}
                                key={item}
                                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                                href="#"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        )
                    )}
                </nav>

                {/** social icons - computador  */}
                <div className="md:flex items-center hidden space-x-4">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3,
                        }}
                        duration={0.8}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        href="#"
                    >
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3,
                        }}
                        duration={0.8}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        href="#"
                    >
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>
                    {/** contrate me */}
                    <motion.button
                    onClick={openContactForm}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 1.6,
                        duration: 0.8,
                    }}
                    className="ml-4 px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700  font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white rounded-xl transition-all duration-500"
                >
                    Contrate-me
                </motion.button>
                </div>

                {/** mobile navegação botão */}
                <div className="md:hidden flex items-center">
                    <motion.button
                    whileTap={{ scale: 0.7 }}
                    onClick={toggleMenu}
                    className="text-gray-300"
                    >{isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </motion.button>
                </div>


            </div>
                
            {/** mobile navegação */}
            
            <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, 
                height: isOpen ? "auto" : "0" }}
            transition={{ duration: 0.5 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5 ">

                <nav 
                className="flex flex-col space-y-3">
                {["Inicio", "Sobre", "Projetos", "Contato"].map((item) => (
                    <a onClick={toggleMenu}
                    className="text-gray-300 font-medium py-2"
                    key={item}
                    href="#">{item}</a>
                ))}
                </nav>

                <div
                className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-5">
                        <a href="#">
                            <FiGithub className="w-5 h-5 text-gray-300" />
                        </a>
                        <a href="#">
                            <FiLinkedin className="w-5 h-5 text-gray-300" />
                        </a>
                    </div>

                    <button 
                    //onclick={() => {toggleMenu() 
                    //openContactForm()}}
                    onClick={openContactForm}
                    className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">
                        contrate-me
                    </button>
                </div>

            </motion.div>

            {/** formulario contato*/}
            <AnimatePresence>
            {contactFormOpen && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex z-50 justify-center items-center p-4"
                >

                    <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                        duration: 0.8 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">

                        <div className="flex justify-between items-center mb-4">
                            <h1
                            className="text-2xl font-bold text-gray-300 ">Entrar em Contato</h1>

                            <button
                            onClick={closeContactForm}>
                                <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                            </button>
                        </div>

                        {/** INputs */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    Nome
                                </label>
                                <input type="text" name="name" id="name"
                                placeholder="Digite seu nome"
                                className="w-full px-4 py-2 border border-gray-600  rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input type="email" name="email" id="email"
                                placeholder="Digite seu email"
                                className="w-full px-4 py-2 border border-gray-600  rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                    Mensagem
                                </label>
                                <textarea  id="message"
                                rows="4"
                                placeholder="Como posso ajudar?"
                                className="w-full px-4 py-2 border border-gray-600  rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" />
                            </div>

                            <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300  rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 font-bold">
                                Enviar Mensagem
                            </motion.button>
                        </form>

                    </motion.div>

                </motion.div>
            )}
            </AnimatePresence>

        </header>
    );
};

export default Header;
