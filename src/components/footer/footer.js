import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
    // instgram
    // artstation
    // behance
    // fivver
    // threads
    return (
        <div className='footer-wrapper'>
            <div>
                <a className='icon' href='https://www.instagram.com/anapatsuu?igsh=OGF4YWFpemxnMjVy'><i className="bi icon bi-instagram"></i></a>
                <a className='icon' href='https://www.threads.net/@anapatsuu'><i className="bi icon bi-threads"></i></a>
                <a className='icon' href='https://www.behance.net/anatodd'><i className="bi icon bi-behance"></i></a>
                <a className='icon icon-svg' href='https://www.artstation.com/anapatsuu9'><svg className='svg' fill="#1a2b18" width="25px" height="25px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>ArtStation icon</title><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/></svg></a>
            </div>
        </div>
    );
}

export default Footer;