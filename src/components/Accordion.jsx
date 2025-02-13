import React, { useState, useEffect } from 'react';


const Accordion = () => {
  const [faqs, setFaqs] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch('/faqs.json')
      .then((response) => response.json())
      .then((data) => setFaqs(data.faqs))
      .catch((error) => console.error('Error fetching FAQs:', error));
  }, []);

  const handleClick = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`accordion-item ${openId === faq.id ? 'active' : ''}`}
        >
          <div
            className="accordion-question"
            onClick={() => handleClick(faq.id)}
          >
            {faq.question}
          </div>
          {openId === faq.id && (
            <div className="accordion-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;