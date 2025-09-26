import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../../styles/home/faq.css";

const faqs = [
  {
    question: "What is your refund policy?",
    answer: "We offer a full refund within 30 days of purchase, no questions asked."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! Our support team is available 24/7 via email and live chat."
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely. You can try our product free for 14 days, no credit card required."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account settings."
  },
  {
    question: "Do you provide updates?",
    answer: "All plans include free updates and new features as they are released."
  },
  {
    question: "Is my data secure?",
    answer: "We use industry-standard encryption and regular audits to ensure your data is safe."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="icon" />
                ) : (
                  <ChevronDown className="icon" />
                )}
              </button>
              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className="faq-answer-wrapper"
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[i]?.scrollHeight + "px"
                    : "0px",
                }}
              >
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
