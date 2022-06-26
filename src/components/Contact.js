// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <div className='person'>
            <img src={data.photo} alt='photo-person' className='avatar' />
            <div className='profile'>
                <h1 className='name'>{data.name}</h1>
                <h1 className='phone'>{data.phone}</h1>
                <h1 className='email'>{data.email}</h1>
            </div>
        </div>
    )
}

export default Contact;