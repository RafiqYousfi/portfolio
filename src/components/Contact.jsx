import React from "react";
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "789ad792-7cdc-4e94-8038-cbe380f11967");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Succes!",
        text: "Message sent succesfully!",
        icon: "success"
      });
      
      
    }
  };

  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-center gao-16 p-8"
    >
      <h1 className="text-center text-6xl font-light text-teal-600">
        Get in touch
      </h1>

      <form className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            name='name'
          />

          <input
            type="text"
            placeholder="Your Surname"
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            name='name'
          />

<input
            type="text"
            placeholder="Your E-mail"
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            name="email"
          />
        </div>

        <textarea name="message" placeholder="Your Message" className="h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"></textarea>
        <button className="rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
