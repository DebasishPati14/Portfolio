import React from "react";
import './style.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="home">
                <div className="home__text-wrapper">
                    <h1>Hello, I'm Debasish.
                        <br />
                        Full Stack Web Developer.
                    </h1>
                </div>
                <Animate play duration={2} start={{ transform: 'translateY(500px)' }} end={{ transform: 'translateX(00px)' }}>
                    <div className="home__contact-me">
                        <button onClick={() => { console.log(navigate); navigate('/contact') }}>
                        {"Send a Message 💌"}
                        </button>
                    </div>
                </Animate>
            </section >
        </>
    )
}

export default Home;