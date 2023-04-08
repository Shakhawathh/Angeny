import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#FBF5E7] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/351a251d-9d44-4224-a2d7-373e8e8e86c8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-600 text-black-300">
            Contact
          </p>
          <p className="text-gray-700 py-4">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-[#384c6e] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#354259]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 border-black hover:hover:text-[#702FFF] hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
