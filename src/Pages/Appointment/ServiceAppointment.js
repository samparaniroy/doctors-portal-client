import React from 'react';

const ServiceAppointment = ({serviceappointment}) => {
    const{name, slots} = serviceappointment;
    return (
        <div class="card shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length >0
                    ? <span>{slots[0]}</span>
                    : <span className='text-red-500'>Try another date</span>
                }</p>
                <p>{slots.length} SPACES AVAILABLE</p>
                <div class="card-actions justify-center">
                <button disabled={slots.length === 0} class="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceAppointment;