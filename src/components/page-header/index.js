import React from "react";
import './style.scss';

export default function PageHeader(props) {
    return (
        <>
            <div className="wrapper">
                <h2>{props.heading}</h2>
                <span>{props.icon}</span>
            </div>
        </>
    )
}