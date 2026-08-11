import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [open, setOpen] = useState(null);

  const questions = [
    {
      question: "What technologies do you use?",
      answer:
        "I build websites using HTML, CSS, JavaScript and React. I am also learning the MERN stack."
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes. I build websites that work properly on mobile, tablet and desktop screens."
    },
    {
      question: "Can you build a website for my business?",
      answer:
        "Yes. I can build a modern website for small businesses, including contact forms and WhatsApp integration."
    },
    {
      question: "How long does a website take to build?",
      answer:
        "The time depends on the size and features of the website. A  simple business website can usually be completed much faster than a large web application."
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact me through the contact section of this website."
    }
  ];

  function handleClick(index) {
    setOpen(open === index ? null : index);
  }

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Have questions? Here are some common ones.
      </p>

      <div className="faq-container">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => handleClick(index)}
            >
              <span>{item.question}</span>

              <span>
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <p className="faq-answer">
                {item.answer}
              </p>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;