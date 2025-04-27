import { useState } from "react";
import propTypes from "prop-types";

export default function Faq() {
  const [FaqActive, setFaqAcitve] = useState(null);

  const questions = [
    {
      id: 0,
      title: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      id: 1,
      title: "  How can I request a new browser?",
      answer:
        " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: 2,
      title: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.",
    },
    {
      id: 3,
      title: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  function handelFaqActive(qId) {
    FaqActive === qId ? setFaqAcitve(null) : setFaqAcitve(qId);
  }
  const renderFaq = questions.map((q, i) => {
    return (
      <article
        key={i}
        className={`question ${FaqActive === q.id ? "open" : ""}`}
        onClick={() => handelFaqActive(q.id)}
        aria-label="Frequently Asked Questions"
        role="group"
        aria-labelledby={`faq-title-${q.id}`}
      >
        <FaqQuestion
          key={i}
          title={q.title}
          answer={q.answer}
          isActive={FaqActive === q.id}
          id={q.id}
        />
      </article>
    );
  });

  return (
    <div className="faq">
      <h2 className="section__title">Frquently Asked Questions</h2>
      <p className="section__prag">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      {/* faq content */}
      <div className="faq__content">{renderFaq}</div>
      <button className="faq__btn">More Info</button>
    </div>
  );
}

function FaqQuestion({ id, title, answer, isActive }) {
  return (
    <>
      <div className="question__details">
        <button
          id={`faq-title-${id}`}
          aria-expanded={isActive}
          aria-controls={`faq-answer-${id}`}
        >
          {title}
        </button>
        <img src="assets/images/icon-arrow.svg" alt="" aria-hidden="true" />
      </div>
      <p role="region" id={`faq-answer-${id}`} aria-hidden={!isActive}>
        {answer}
      </p>
    </>
  );
}

FaqQuestion.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
};
