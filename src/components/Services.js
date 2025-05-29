import React from 'react';
import './Services.css';
import interiorImg from '../assets/Interior.JPG';
import exteriorImg from '../assets/Exterior.JPG';
import fullImg from '../assets/Full.JPG';

function Services(){
    return (
        <section className="services-section">
            <h2 className="services-title">OUR <br></br>SERVICES</h2>
            <hr className="services-line" />
            <div className="services-container">
                <div className="service-card">
                    <img src={interiorImg} alt="Interior Detail" className="service-image" />
                    <h3>Interior Detail</h3>
                    <h4>Looking for an interior detailing <br></br> service that will leave your car looking <br></br> and feeling new? Our team offers
                    <br></br>a comprehensive package that <br></br> includes vacuuming and a deep clean <br></br>of your seats, console, dash, vents, 
                    <br></br> steering wheel, etc.</h4>
                    <h4 className = "prices"> SEDANS: $80 <br></br> MID-SIZED SUVs: $90 <br></br> LARGE SUVs: $100</h4>
                </div>
                <div className="service-card">
                    <img src={exteriorImg} alt="Exterior Detail" className="service-image" />
                    <h3>Exterior Detail</h3>
                    <h4>Exterior Detailing is a crucial part of <br></br>maintaining the appearance of your <br></br>vehicle. This service includes a spot free
                    <br></br> pressure wash, thorough hand wash, <br></br> streak-free glass cleaning, thorough<br></br> wheel cleaning, and spray wax for
                    <br></br> that extra shine that lasts for weeks.</h4>
                    <h4 className = "prices"> SEDANS: $70 <br></br> MID-SIZED SUVs: $80 <br></br> LARGE SUVs: $90</h4>
                </div>
                <div className="service-card">
                    <img src={fullImg} alt="Full Detail" className="service-image" />
                    <h3>Full Detail</h3>
                    <h4>Looking for a detailing service that <br></br>combines both interior and exterior <br></br>cleaning services? Look no further!
                    <br></br> Out team is here to provide you <br></br>with top-notch detailing services <br></br>that will leave your car looking and
                    <br></br>feeling brand new</h4>
                    <h4 className = "prices"> SEDANS: $135 <br></br> MID-SIZED SUVs: $150 <br></br> LARGE SUVs: $165</h4>
                </div>
            </div>
        </section>
    )
}

export default Services;