import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure pl-5>
                    <img src={clock} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure className='pl-5'>
                    <img src={marker} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure className='pl-5'>
                    <img src={phone} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;