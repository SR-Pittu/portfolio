import { useEffect, useState } from "react";
import { skills } from "../data/data";

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">
        {title}
      </h2>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(skills[0].title);

  useEffect(() => {
    arrangeOrbit();
    window.addEventListener("resize", arrangeOrbit);
    return () => window.removeEventListener("resize", arrangeOrbit);
  }, []);

  function arrangeOrbit() {
    const items = document.querySelectorAll(".orbit-item");
    const radius = 140;
    const total = items.length;

    items.forEach((item, index) => {
      const angle = (index / total) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  const activeSkills =
    skills.find((group) => group.title === active)?.items || [];

  return (
    <section id="skills" className="py-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Technical Skills" />

        {/* MAIN CARD */}
        <div className="rounded-[28px] border border-slate-200 bg-white p-12 shadow-[0_10px_40px_rgba(2,6,23,0.06)]">

          {/* ORBIT AREA */}
          <div className="flex flex-col items-center">

            {/* ORBIT CONTAINER */}
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">

              {/* CENTER */}
              <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white flex items-center justify-center font-bold shadow-xl z-10">
                Skills
              </div>

              {/* ORBIT ITEMS */}
              {skills.map((group) => (
                <div
                  key={group.title}
                  className={`orbit-item absolute w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center cursor-pointer transition-all duration-300
                  ${
                    active === group.title
                      ? "bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white scale-110 shadow-lg"
                      : "hover:border-[#7c3aed] hover:text-[#7c3aed]"
                  }
                  `}
                  onClick={() => setActive(group.title)}
                >
                  <span className="text-xs font-semibold text-center px-2">
                    {group.title}
                  </span>
                </div>
              ))}
            </div>

            {/* SKILLS DISPLAY */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-3xl">

              {activeSkills.map((skill) => (
                <div
                  key={skill}
                  className="
                    px-6 py-3
                    rounded-xl
                    bg-slate-50
                    border border-slate-200
                    text-slate-800
                    font-semibold
                    hover:border-[#7c3aed]
                    hover:text-[#7c3aed]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}