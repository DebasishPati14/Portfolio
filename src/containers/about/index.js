import React from "react";
import PageHeader from '../../components/page-header';
import { RiContactsFill } from 'react-icons/ri'
import { Animate } from 'react-simple-animate';
import { DiJava } from 'react-icons/di';
import { MdLanguage } from 'react-icons/md';
import { HiDatabase } from 'react-icons/hi';
import { SiAngularjs } from 'react-icons/si'
import './style.scss'
import { about, personalDetails } from "../../utils/utility";

const data = personalDetails
const description = about;

const About = () => {
    return (
        <>
            <section id="about" className="about">
                <PageHeader heading="About Me" icon={<RiContactsFill size={35} />} ></PageHeader>
                <div className="about__content">
                    <div className="about__content__personalWrapper">

                        <Animate play duration={1} start={{ transform: 'translatex(-900px)' }} end={{ transform: 'translateX(00px)' }}>
                            <h3>Personal Note</h3>
                            <p>{description}</p>
                        </Animate>

                        <Animate play duration={1} start={{ transform: 'translateY(500px)' }} end={{ transform: 'translateX(0px)' }}>
                            <h3 style={{marginTop:"20px"}}>Personal Details</h3>
                            <ul>
                                {data.map((item, index) => {
                                    return (
                                        <li  key={index}>
                                            <span className="title">{item.label + " : "} </span>
                                            <span className="value">{" " + item.value}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Animate>
                    </div>
                    <div className="about__content__servicesWrapper">
                        <Animate play duration={1} start={{ transform: 'translateX(600px)' }} end={{ transform: 'translateX(0px)' }}>
                            <div className="about__content__servicesWrapper__innerContent">
                                <div>
                                    <HiDatabase size={55} color="var( --light-green-theme-main-color)" />
                                </div>
                                <div>
                                    <DiJava size={55} color="var( --light-green-theme-main-color)" />
                                </div>
                                <div>
                                    <SiAngularjs size={55} color="var( --light-green-theme-main-color)" />
                                </div>
                                <div>
                                    <MdLanguage size={55} color="var( --light-green-theme-main-color)" />
                                </div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </section >
        </>
    )
}

export default About;