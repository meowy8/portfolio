import { useState } from "react";

const Contact = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
    setMessageSent(true);
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify={true}
      className="flex flex-col gap-4 p-4 w-full md:w-2/5 lg:w-4/5 max-w-[500px] roboto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <h1 className="text-2xl archivFont">Contact</h1>
      {messageSent ? (
        <p className="flex justify-center">Thanks for your message!</p>
      ) : (
        <>
          <label htmlFor="name" className="flex justify-between  ">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              className="w-3/5"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="flex justify-between ">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              className="w-3/5"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </label>
          <label htmlFor="message" className="flex justify-between ">
            Message:
            <textarea
              type="text"
              id="message"
              name="message"
              className="w-3/5"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border rounded-sm m-2 p-2 w-56 hover:bg-white hover:text-[#618985]"
            >
              Send Message
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Contact;
