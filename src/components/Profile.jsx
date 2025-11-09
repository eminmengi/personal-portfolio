import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section className="py-24 bg-primary text-white dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 items-center">
        
        {/* Sol taraf: Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Profile</h2>
          <div className="space-y-3 text-sm">
            <p><span className="font-semibold text-accent">Doğum tarihi:</span> 24.03.1996</p>
            <p><span className="font-semibold text-accent">İkamet Şehri:</span> Ankara</p>
            <p><span className="font-semibold text-accent">Eğitim Durumu:</span> Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            <p><span className="font-semibold text-accent">Tercih Ettiği Rol:</span> Frontend, UI</p>
          </div>
        </motion.div>

        {/* Orta: Görsel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/profile2.png"
            alt="Profile working"
            className="rounded-2xl shadow-xl w-72 md:w-80"
          />
        </motion.div>

        {/* Sağ taraf: About Me */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-accent">About Me</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Venıam aut, 
            odit laborum aliquam voluptatum nisi mollitia. Minima accusamus ratione 
            soluta aperiam sit voluptatem?
          </p>
          <p className="text-sm leading-relaxed mt-4">
            Dicta quod deserunt quam temporibus cumque magnam! Lorem ipsum dolor sit amet.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Profile;
