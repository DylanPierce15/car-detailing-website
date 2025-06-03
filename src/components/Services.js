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
                    <h4>Looking for an interior detailing service that will leave your car looking and feeling new? Our team offers a comprehensive package that
        includes vacuuming and a deep clean of your seats, console, dash, vents, steering wheel, etc.</h4>
                    <h4 className = "prices"> SEDANS: $80 <br></br> MID-SIZED SUVs: $90 <br></br> LARGE SUVs: $100</h4>
                </div>
                <div className="service-card">
                    <img src={exteriorImg} alt="Exterior Detail" className="service-image" />
                    <h3>Exterior Detail</h3>
                    <h4>Exterior Detailing is a crucial part of maintaining the appearance of your vehicle. This service includes a spot free
                     pressure wash, thorough hand wash, streak-free glass cleaning, thorough wheel cleaning, and spray wax for
                     that extra shine that lasts for weeks.</h4>
                    <h4 className = "prices"> SEDANS: $70 <br></br> MID-SIZED SUVs: $80 <br></br> LARGE SUVs: $90</h4>
                </div>
                <div className="service-card">
                    <img src={fullImg} alt="Full Detail" className="service-image" />
                    <h3>Full Detail</h3>
                    <h4>Looking for a detailing service that combines both interior and exterior cleaning services? Look no further!
                     Our team is here to provide you with top-notch detailing services that will leave your car looking and 
                    feeling brand new</h4>
                    <h4 className = "prices"> SEDANS: $135 <br></br> MID-SIZED SUVs: $150 <br></br> LARGE SUVs: $165</h4>
                </div>
            </div>
        </section>
    )
}

export default Services;
