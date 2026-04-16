import { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { question: "1. What is HTML?", answer: " HTML is a computer language devised to can then b the Internet. It is relatively easy to learn, with the basics being accessible." },
    { question: "2. What is Bootstrap?", answer: "Bootstrap is the most popular HTML, CSS, and JS framework available today. I discovered Bootstrap a few years ago and was still gaining in popularity, addition to HTML, CSS and Js." },
    { question: "3. What is CSS?", answer: "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS." }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          
          <div 
            onClick={() => toggle(index)} 
            className="text-dark fs-5 p-3 mb-1 fw-bold text-uppercase "
            style={{ cursor: "pointer", background: "#eee", padding: "10px" }}
          >
            {item.question}
          </div>

          <div
          className=" text-muted toggle m-0"
            style={{
                
              maxHeight: activeIndex === index ? "110px" : "0px",
              
              overflow: "hidden",
              padding: activeIndex === index ? "15px 15px 70px" : "0px",
              transition: "0.5s",
              background: "#f9f9f9",
              color:'#333',
            }}
          >
            {item.answer}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Accordion;