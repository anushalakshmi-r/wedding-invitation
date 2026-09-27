
import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./FAQ.css";
import "./Hero.css";

function FAQ() {
  const faqData = [
    {
      question: "1. What types of invitations do you offer?",
      answer:
        "We offer a wide range of wedding invitations, including Hindu, Christian, Muslim, interfaith, floral, luxury, traditional, and modern invitation designs."
    },
    {
      question: "2. Can I customize my wedding invitation?",
      answer:
        "Yes. You can customize important details such as names, wedding dates, venue information, colors, and other invitation content based on the available design options."
    },
    {
      question: "3. Do you provide digital wedding invitations?",
      answer:
        "Yes. We provide digital invitation options that can be shared with friends and family through messaging applications, email, and social media."
    },
    {
      question: "4. How can I place an order?",
      answer:
        "You can explore our invitation collections, select your preferred design, and contact our team for assistance with the ordering and customization process."
    },
    {
      question: "5. Can I see the invitation proof before finalizing?",
      answer:
        "Proofing options depend on the selected invitation service. Our team can help you review the available details and make corrections before final approval."
    },
    {
      question: "6. How long does it take to prepare an invitation?",
      answer:
        "The preparation time depends on the invitation type, customization requirements, and approval process. Our team will provide the expected timeline during the order process."
    },
    {
      question: "7. Do you offer invitations for other occasions?",
      answer:
        "Yes. Along with wedding invitations, we can offer invitation designs for birthdays, anniversaries, engagements, baby showers, housewarmings, and other celebrations."
    },
    {
      question: "8. Can I share digital invitations worldwide?",
      answer:
        "Yes. Digital invitations can be shared with guests across different locations through online communication platforms, making it convenient to reach loved ones worldwide."
    },
    {
      question: "9. How can I contact customer support?",
      answer:
        "You can contact our customer support team through the contact details provided on our Contact Us page. Our team will assist you with your questions and requirements."
    },
    {
      question: "10. Can I get help choosing the right invitation design?",
      answer:
        "Yes. Our team can help you explore different themes, styles, and invitation collections so you can choose a design that suits your celebration."
    }
  ];

  return (
    <div className="faq-page">

      {/* Navbar */}
      <Navbar />

      {/* FAQ Hero */}
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>

        <p>
          Find answers to common questions about our invitation
          designs, customization, ordering, and services.
        </p>
      </section>

      {/* FAQ Questions and Answers */}
      <section className="faq-section">

        <div className="faq-container">

          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>

              {/* Question */}
              <div className="faq-question">
                <h2>{faq.question}</h2>
              </div>

              {/* Answer */}
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default FAQ;