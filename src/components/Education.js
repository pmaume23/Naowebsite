import React from 'react';
import '../App.css';

function Education() {
    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#">Rikkyo University</a>
                        <a href="#" className="float-right">2019 - 2022</a>
                        <p>
                            Bsc in Humanities
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;