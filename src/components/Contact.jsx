import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    toast.success("Message sent! (Demo)");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#F9F9F9] dark:bg-[#252128] transition-colors duration-300 flex flex-col items-center">
      <div className="max-w-[483px] mx-auto text-center flex flex-col gap-6">
        <h2 className="text-[48px] font-bold text-[#4731D3] dark:text-[#8F88FF] leading-[72px]">
          {t("contact.title")}
        </h2>

        <p className="text-[24px] font-normal leading-[36px] text-[#120B39] dark:text-white">
          {t("contact.subtitle")}
        </p>

        <a
          href="mailto:almilasucode@gmail.com"
          className="text-[20px] font-medium text-[#4731D3] dark:text-[#8F88FF] underline underline-offset-4"
        >
          eminmengi@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-[#4731D3] dark:text-[#8F88FF] text-3xl hover:scale-110 transition-transform"><FaTwitter /></a>
          <a href="#" className="text-[#4731D3] dark:text-[#8F88FF] text-3xl hover:scale-110 transition-transform"><FaGithub /></a>
          <a href="#" className="text-[#4731D3] dark:text-[#8F88FF] text-3xl hover:scale-110 transition-transform"><FaLinkedin /></a>
          <a href="#" className="text-[#4731D3] dark:text-[#8F88FF] text-3xl hover:scale-110 transition-transform"><FaInstagram /></a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[500px] flex flex-col gap-4 mt-8 text-left px-4 md:px-0">
          <div>
            <label className="text-sm font-medium text-[#4731D3] dark:text-[#8F88FF] mb-1 block">
              {t("contact.email")}
            </label>
            <input
              {...register("email", { required: true })}
              className="w-full h-12 px-4 rounded-md border border-[#4731D3] dark:border-[#8F88FF] bg-white dark:bg-[#171043] text-[#120B39] dark:text-white outline-none focus:ring-2 focus:ring-[#CBF281] transition-all"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="h-12 bg-[#4731D3] dark:bg-[#CBF281] text-white dark:text-[#171043] font-bold rounded-md hover:opacity-90 transition-opacity"
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
