import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 items-center min-h-screen px-6 pt-24 md:pt-0 bg-gradient-to-r from-primary to-accent">
      <div className="text-white space-y-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          I am a Frontend Developer...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-md"
        >
          ...who likes to craft solid and scalable frontend products with great
          user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex gap-4"
        >
          <a
            href="#"
            className="px-5 py-2 bg-white text-primary font-semibold rounded hover:bg-accent hover:text-white transition-all"
          >
            Github
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-white text-primary font-semibold rounded hover:bg-accent hover:text-white transition-all"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-10 md:mt-0"
      >
        <img
          src="/profile.png"
          alt="Profile"
          className="rounded-xl shadow-xl w-80 md:w-[400px]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
