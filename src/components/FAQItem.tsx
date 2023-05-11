import React from "react";

type FAQ = {
    question: string;
    answer: string;
    open: boolean;
};

interface Props {
  faq: FAQ;
  index: number;
  toggleFAQ: (index: number) => void;
}

const FAQ: React.FC<Props> = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="text-body faq-question">{faq.question}</div>
      <div className="indicator"><span className="sign">{faq.open ? '-' : '+'}</span></div>
      <div className="text-sm faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
