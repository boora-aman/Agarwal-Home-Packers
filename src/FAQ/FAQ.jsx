import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-lg">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer packing, moving, loading, unloading, and storage services for residential and commercial needs. We also provide vehicle transportation services.",
    },
    {
      question: "Do you provide insurance for my belongings?",
      answer:
        "Yes, we offer insurance options to protect your belongings against any unforeseen damage during transit.",
    },
    {
      question: "How are your charges calculated?",
      answer:
        "Our charges depend on factors such as the distance, volume of goods, type of service required, and additional services like insurance or storage.",
    },
    {
      question: "Do you provide packing materials?",
      answer:
        "Yes, we use high-quality packing materials like bubble wrap, corrugated boxes, and packing tapes to ensure the safety of your items.",
    },
    {
      question: "Can I track my shipment?",
      answer:
        "Yes, we provide real-time tracking for your shipment so you can monitor its progress at any time.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We provide services across India, with a strong presence in Dehradun and other major cities. Contact us to confirm availability in your area.",
    },
    {
      question: "How far in advance should I book your services?",
      answer:
        "We recommend booking at least a week in advance to ensure availability. For urgent requirements, contact us directly, and we'll do our best to assist you.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-gray-500 uppercase mb-2">FAQ</h2>
        <h1 className="text-4xl font-bold mb-2">
          Quick answers to questions you may have
        </h1>
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for?
        </p>
        <a
          href="mailto:info@agarwalhomepackers.in"
          className="text-orange-500"
        >
          info@agarwalhomepackers.in
        </a>
      </section>

      <div className="bg-white shadow-lg rounded-lg p-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
