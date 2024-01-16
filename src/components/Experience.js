import React from 'react';
import '../App.css';

function Experience() {
    return (
        <section id="experience" className="container">
            <div className="container mt-5 mb-5">
                <h2>Experience</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#">Dyson</a>
                        <a href="#" className="float-right">April 2022 - Present</a>
                        <p>
                            Supply Planning Executive
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;