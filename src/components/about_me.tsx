import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProfileImage from "./images/WhatsApp Image 2025-09-06 at 12.38.55.jpeg";
import { infoList, skillList } from "./data";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";

// Add this component above the main AboutMe component in the same file

const SkillItem = ({
  skill,
  index,
  isActive,
  onHover,
}: {
  skill: any;
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  const iconColor = mounted
    ? resolvedTheme === "dark"
      ? "rgb(80, 7, 36)"
      : "rgb(252 244 255)"
    : "currentColor";

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        className={`flex items-center justify-center w-15 sm:w-16 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${
          isActive ? "shadow-md" : ""
        }`}
        animate={{
          backgroundColor: isActive ? iconColor : "transparent",
          transition: { duration: 0.5 },
        }}
        style={{
          transition: "all 0.5s ease",
        }}
      >
        <motion.div
          className="w-8 flex flex-col items-center justify-center"
          animate={{ opacity: 1 }}
          style={{ transition: "all 0.5s ease" }}
        >
          {isActive ? skill?.active_icon : skill?.inactive_icon}
          <AnimatePresence>
            {isActive && (
              <motion.span
                initial={{ opacity: 0, y: -5, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -5, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs mt-[4px] font-medium text-center"
              >
                {skill.title}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function AboutMe() {
  const [activeSkills, setActiveSkills] = useState<number[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  useEffect(() => {
    const activateRandomSkills = () => {
      const skillCount = Math.floor(Math.random() * 2) + 2;
      const selectedSkills = new Set<number>();

      while (selectedSkills.size < skillCount) {
        const randomIndex = Math.floor(Math.random() * skillList.length);
        selectedSkills.add(randomIndex);
      }

      setActiveSkills(Array.from(selectedSkills));
    };

    activateRandomSkills();

    const intervalId = setInterval(() => {
      activateRandomSkills();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const isSkillActive = (index: number) => {
    return activeSkills.includes(index) || hoveredSkill === index;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[8%]  py-10 scroll-mt-20  "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-72 rounded-3xl max-w-none"
        >
          <Image
            src={ProfileImage}
            alt="user"
            className="w-full rounded-3xl h-[330px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-4xl  text-[14px] tracking-widest ">
            <p className="mb-10 max-w-4xl text-[14px] tracking-widest">
              I am a passionate Frontend Architect who secured the 8th rank in
              Calicut University for B.Sc. Computer Science. I specialize in
              building responsive, user-friendly web applications using modern
              technologies such as React.js, Next.js, and Tailwind CSS. I have
              collaborated with cross-functional Agile teams to deliver
              high-quality products, while also contributing to backend
              development with LoopBack and MongoDB to ensure a robust and
              scalable architecture.
            </p>
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 min-[1024px]:grid-cols-2 min-[1300px]:grid-cols-3 gap-6 max-w-2xl "
          >
            {infoList.map((item, index) => (
              <motion.li
                viewport={{ once: true }}
                whileInView={{ scale: 1.05 }}
                key={index}
                className=" border-[1px] border-gray-400 rounded-xl px-4 py-6 cursor-pointer  hover:bg-[#fcf4ff]  hover:-translate-y-1 transition-all duration-500 dark:hover:bg-pink-950 dark:hover:shadow-[4px_4px_0_#fff] hover:shadow-[4px_4px_0_#000]"
              >
                {item?.icon}

                <h3 className="dark:text-white my-4 font-semibold text-gray-700">
                  {item?.title}
                </h3>

                <p className="dark:text-gray-200 text-gray-600 text-sm ">
                  {item?.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <div className="grid min-[1060px]:grid-cols-2 grid-cols-1 items-center justify-center">
        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 mb-4 text-gray-700 sm:flex hidden text-[19px] min-[352px]:text-[22px] min-[510px]:text-3xl min-[1300px]:text-4xl  font-Ovo dark:text-white/80"
        >
          Frameworks & Tools I use
        </motion.h4>

        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 mb-4 text-gray-700 sm:hidden flex   min-[352px]:text-[22px] min-[510px]:text-3xl min-[1300px]:text-4xl  font-Ovo dark:text-white/80"
        >
          Frameworks & Tools
        </motion.h4>

        <div className="sm:grid  grid-cols-5 gap-4 mt-10  hidden">
          {/* Row 1: 1,null,2,3,null */}
          <SkillItem
            skill={skillList[0]}
            index={0}
            isActive={isSkillActive(0)}
            onHover={setHoveredSkill}
          />
          <div></div>
          <SkillItem
            skill={skillList[1]}
            index={1}
            isActive={isSkillActive(1)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[2]}
            index={2}
            isActive={isSkillActive(2)}
            onHover={setHoveredSkill}
          />
          <div></div>

          {/* Row 2: null,4,5,null,null */}
          <div></div>
          <SkillItem
            skill={skillList[3]}
            index={3}
            isActive={isSkillActive(3)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[4]}
            index={4}
            isActive={isSkillActive(4)}
            onHover={setHoveredSkill}
          />
          <div></div>
          <div></div>

          {/* Row 3: 6,null,7,null,8 */}
          <SkillItem
            skill={skillList[5]}
            index={5}
            isActive={isSkillActive(5)}
            onHover={setHoveredSkill}
          />
          <div></div>
          <SkillItem
            skill={skillList[6]}
            index={6}
            isActive={isSkillActive(6)}
            onHover={setHoveredSkill}
          />
          <div></div>
          <SkillItem
            skill={skillList[7]}
            index={7}
            isActive={isSkillActive(7)}
            onHover={setHoveredSkill}
          />

          {/* Row 4: 9,10,11,null,null */}
          <SkillItem
            skill={skillList[8]}
            index={8}
            isActive={isSkillActive(8)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[9]}
            index={9}
            isActive={isSkillActive(9)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[10]}
            index={10}
            isActive={isSkillActive(10)}
            onHover={setHoveredSkill}
          />
          <div></div>
          <div></div>

          {/* Row 5: null,12,13,null,14 */}
          <div></div>
          <SkillItem
            skill={skillList[11]}
            index={11}
            isActive={isSkillActive(11)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[12]}
            index={12}
            isActive={isSkillActive(12)}
            onHover={setHoveredSkill}
          />
          <div></div>
          <SkillItem
            skill={skillList[13]}
            index={13}
            isActive={isSkillActive(13)}
            onHover={setHoveredSkill}
          />
        </div>
        <div className="sm:hidden  grid-cols-3 gap-4 mt-10  grid">
          {/* Row 1: 1,null,2,3,null */}
          <SkillItem
            skill={skillList[0]}
            index={0}
            isActive={isSkillActive(0)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[1]}
            index={1}
            isActive={isSkillActive(1)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[2]}
            index={2}
            isActive={isSkillActive(2)}
            onHover={setHoveredSkill}
          />

          {/* Row 2: null,4,5,null,null */}

          <SkillItem
            skill={skillList[3]}
            index={3}
            isActive={isSkillActive(3)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[4]}
            index={4}
            isActive={isSkillActive(4)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[5]}
            index={5}
            isActive={isSkillActive(5)}
            onHover={setHoveredSkill}
          />

          {/* Row 3: 6,null,7,null,8 */}

          <SkillItem
            skill={skillList[6]}
            index={6}
            isActive={isSkillActive(6)}
            onHover={setHoveredSkill}
          />

          <SkillItem
            skill={skillList[7]}
            index={7}
            isActive={isSkillActive(7)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[8]}
            index={8}
            isActive={isSkillActive(8)}
            onHover={setHoveredSkill}
          />
          {/* Row 4: 9,10,11,null,null */}

          <SkillItem
            skill={skillList[9]}
            index={9}
            isActive={isSkillActive(9)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[10]}
            index={10}
            isActive={isSkillActive(10)}
            onHover={setHoveredSkill}
          />
          <SkillItem
            skill={skillList[11]}
            index={11}
            isActive={isSkillActive(11)}
            onHover={setHoveredSkill}
          />

          {/* Row 5: null,12,13,null,14 */}

          <SkillItem
            skill={skillList[12]}
            index={12}
            isActive={isSkillActive(12)}
            onHover={setHoveredSkill}
          />

          <SkillItem
            skill={skillList[13]}
            index={13}
            isActive={isSkillActive(13)}
            onHover={setHoveredSkill}
          />
        </div>
      </div>
    </motion.div>
  );
}
