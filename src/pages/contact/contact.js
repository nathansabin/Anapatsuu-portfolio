import React, { useState } from 'react';
import PageNav from '../../components/pagenav/pagenav';
import './contact.css';


function Contact() {
    const [ info, setInfo ] = useState({
        name: '',
        subject: '',
        info: ''
    });

    const infoChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
    
        setInfo({
            ...info,
            [name]: value
        });
    }

    const email = (e) => {
        e.stopPropagation();
        e.preventDefault()

        const mailtoLink = `mailto:${'sabinnat001@outlook.com'}?subject=${encodeURIComponent(`${info.name} says ${info.subject}`)}&body=${encodeURIComponent(info.info)}`;
        window.location.href = mailtoLink;
    }

    return (
        <div className='contact-container'>
            <form className='contact-box'>
                <h2>Contact</h2>
                <div className='contact-info'>
                    <label>Name</label>
                    <input onChange={infoChange} name='name' type='text'/> 
                    <label>Subject</label>
                    <input onChange={infoChange} name='subject' type='text'/> 
                    <label>Info</label>
                    <input onChange={infoChange}name='info' type=''/> 
                </div>
                <input onClick={email} className='contact-submit' type='submit' />
            </form>
            <PageNav />
        </div>
    );
}

export default Contact;