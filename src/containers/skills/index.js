import React from "react";
import PageHeader from '../../components/page-header';
import './style.scss';
import { GiSkills } from 'react-icons/gi';
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from "rc-progress";
import { skillsData } from "../../utils/utility";

const data = skillsData;

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <PageHeader heading="My Skills" icon={<GiSkills size={35} />} ></PageHeader>
        <div className="skills__content-wrapper">
          {data.map((item, index) => {
            return (
              <div key={index} className="skills__content-wrapper__inner-content">
                <Animate play duration={1} delay={0.3} start={{
                  transform: "translateX(-200px)",
                  width: "60%",
                }}
                  end={{
                    transform: "translateX(0px)",
                    width: "90%",

                  }}>
                  <h3 className="skills__content-wrapper__inner-content__category-text">
                    {item.label}
                  </h3>
                  <div className="skills__content-wrapper__inner-content__progressbar-container">
                    {item.data.map((element, innerIndex) => {
                      return (
                        <div key={innerIndex} className="progressbar-wrapper">
                          <AnimateKeyframes play duration={2} keyframes={["opacity:1", "opacity:0"]} iterationCount="1">
                            <p>{element.skillName}</p>
                            <Line percent={element.percentage} strokeWidth={2} strokeColor={"var(--light-green-theme-main-color)"} trailWidth={2} strokeLinecap="square"></Line>
                          </AnimateKeyframes>
                        </div>
                      )
                    })}
                  </div>
                </Animate>
              </div>
            )
          })}
        </div >
      </section >
    </>
  )
}

export default Skills