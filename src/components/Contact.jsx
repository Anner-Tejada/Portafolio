import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ackb3ki",
        "template_ew4ya76",
        form.current,
        "UYJEBJ4_q5uh-i3Sq"
      )
      .then(
        (result) => {
          alert("Mensado enviado");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-black p-12">
      <div className="w-100 md:justify-center items-center flex mb-4">
        <h2 className="text-white text-2xl">Contacto</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-96">
        <form ref={form} onSubmit={sendEmail}>
          <label className="text-xl mb-2 md:mb-3 text-orange-600">Nombre</label>
          <input
            type="text"
            name="user_name"
            className="w-full py-2 px-1 outline-none mb-4 rounded"
          />
          <label className="text-xl mb-2 md:mb-3 text-orange-600">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full py-2 px-1 outline-none mb-4 rounded"
          />
          <label className="text-xl mb-2 md:mb-3 text-orange-600">Mensaje</label>
          <textarea
            className="w-full py-2 px-1 h-32 outline-none mb-4 rounded"
            name="message"
          />
          <input 
            className="bg-white cursor-pointer px-6 py-2 font-bold transition hover:bg-orange-600 rounded" 
            type="submit" 
            value="Send" />
        </form>

        </div>
      </div>
    </div>
  );
};
