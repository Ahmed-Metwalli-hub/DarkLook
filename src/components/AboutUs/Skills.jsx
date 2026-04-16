import { useEffect, useRef, useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", value: 80, color: "bg-primary" },
    { name: "CSS", value: 90, color: "bg-danger" },
    { name: "JavaScript", value: 65, color: "bg-secondary" },
    { name: "jQuery", value: 50, color: "bg-warning" },
    { name: "Bootstrap", value: 95, color: "bg-success" },
    { name: "React.js", value: 75, color: "bg-info" },
  ];

  return (
    <div ref={sectionRef} className="container ">
      
      {skills.map((skill, i) => (
        <div key={i} className="mb-3">

          <div className="progress bg-dark  rounded-0" style={{ height: "37px" }}>
            <div
              className={`progress-bar ${skill.color} rounded-0 text-white text-start px-3 fs-6 fw-medium`}
              style={{
                width: visible ? `${skill.value}%` : "0%",
                transition: "width 2s ease"
              }}
            > {skill.name} → {skill.value}%</div>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;