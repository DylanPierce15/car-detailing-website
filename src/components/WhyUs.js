import React from 'react';
import './WhyUs.css'; // Global styles

function WhyUs(){
    return (
        <section className="whyus-section">
            <h2 className="whyus-title">WHY US?</h2>
            <hr className="whyus-divider"/>

            <div className="reasons-grid">
                <div className="reason-card">
                    <h3>1. UNMATCHED <br></br> CONVENIENCE</h3>
                    <h4>Say goodbye to the hassle of driving to a car wash and waiting in line. With our mobile detailing service,
                        we bring the car wash to you. Our team will arrive promptly to take care of your vehicle while 
                        you carry on with your day hassle-free.</h4>
                </div>
                <div className="reason-card">
                    <h3>2. PERSONALIZED <br></br> ATTENTION</h3>
                    <h4>We understand that every vehicle is unique, and so are your preferences. Our mobile detailing service offers a 
                        personalized experience tailored to your specific needs. Whether you’re looking for a basic wash or a 
                        comprehensive interior and exterior detailing, we listen to your requirements and ensure that your car
                        receives the attention it deserves</h4>
                </div>
                <div className="reason-card">
                    <h3>3. SUPERIOR <br></br> QUALITY</h3>
                    <h4>At Short Hills Auto Detailing, we take pride in delivering exceptional results with a keen eye for detail. Unlike traditional car washes with time 
                        constraints, our mobile detailing professionals take the time to thoroughly clean and detail your vehicle, leaving no corner untouched, 
                        We utilize top-of-the-line products and equipment to ensure a pristine finish that exceeds your expectations.</h4>
                </div>
                <div className="reason-card">
                    <h3> 4. ENHANCED RESALE <br></br> VALUE</h3>
                    <h4>Did you know that regular car detailing can actually improve your vehicle’s value? By maintaining your car’s 
                    exterior and interior in optimal condition, you’re preserving its appearance and protecting it from 
                    wear and tear. Whether you’re planning to sell or trade your vehicle in the future, investing in regular 
                    detailing can help maintain its resale value and ensure you get the best possible return on your investment.</h4>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;