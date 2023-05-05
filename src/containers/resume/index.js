import React from "react";
import PageHeader from '../../components/page-header';
import { AiTwotoneFile } from 'react-icons/ai';
import './style.scss';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from 'react-icons/md';
import { resumeData } from "../../utils/utility";

const data = resumeData

const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">

        <PageHeader heading="My Resume" icon={<AiTwotoneFile size={35} />} ></PageHeader>
        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline layout={"2-columns"} lineColor="var(--light-green-theme-main-color)">
              {data.experience.map((item, index) => {
                return (
                  <VerticalTimelineElement key={index} className="timeline__experience__vertical-timeline-element"
                    contentStyle={{
                      background: 'none',
                      color: 'var(--green-theme-sub-text-color)',
                      border: '1.5px solid var(--light-green-theme-main-color)'
                    }} icon={<MdWork />}>
                    <div className="vertical-timeline-element-title-wrapper">
                      <h3 >{item.title}</h3>
                    </div>
                    <h2>{item.subTitle}</h2>
                    <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </div>

          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline layout={"2-columns"} lineColor="var(--light-green-theme-main-color)">
              {data.education.map((item, index) => {
                return (
                  <VerticalTimelineElement key={index} className="timeline__experience__vertical-timeline-element" contentStyle={{
                    background: 'none',
                    color: 'var(--green-theme-sub-text-color)',
                    border: '1.5px solid var(--light-green-theme-main-color)'
                  }} icon={<MdWork />}
                  >
                    <div className="vertical-timeline-element-title-wrapper">
                      <h3>{item.title}</h3>
                    </div>
                    <h2>{item.subTitle}</h2>

                    <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume