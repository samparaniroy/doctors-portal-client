import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceAppointment from './ServiceAppointment';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-secondary text-xl'>Available Appointments on {format (date, 'PP')}</h4>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-20'>
            {
                services.map(serviceappointment => <ServiceAppointment key={serviceappointment._id} serviceappointment={serviceappointment}></ServiceAppointment>)
            }
           </div>
        </div>
    );
};

export default AvailableAppointment;