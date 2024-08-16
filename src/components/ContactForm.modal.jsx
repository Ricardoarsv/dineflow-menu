import React from "react";

const ContactForm = React.forwardRef((props, ref) => {
  return (
    <div
      className="bg-white absolute rounded-xl shadow-lg z-50 w-[80%] flex flex-col justify-center items-center"
      ref={ref}
    >
      <form className="flex flex-col gap-2 p-4 text-xl font-mono w-full">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="JohnDoe@email.com" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="max-h-20" placeholder="Enter your message here, we glad to meet you" required />
        <button
          className="bg-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 text-white font-bold font-sans py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
});

export default ContactForm;
