import React from 'react';
import './ContactProfile.css';

const ContactProfile = ({ contact, onClose }) => {
    if (!contact) return null;

    return (
        <div className="contact-profile">
            <header className="profile-header">
                <button className="close-btn" onClick={onClose}>
                    <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                    <span className="header-title">Información del contacto</span>
                </button>
            </header>

            <div className="profile-content">
                <div className="profile-image-section">
                    <img src={contact.avatar} alt={contact.name} className="profile-image-large" />
                    <h2 className="profile-name">{contact.name}</h2>
                    <span className="profile-phone">{contact.phone}</span>
                </div>

                <div className="profile-section">
                    <h3 className="section-title">Info.</h3>
                    <p className="section-text">{contact.about}</p>
                </div>

                <div className="profile-section">

                    <div className="action-item">
                        <div className="action-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
                        </div>
                        <div className="action-text">
                            <span>Bloquear a {contact.name}</span>
                        </div>
                    </div>
                    <div className="action-item text-danger">
                        <div className="action-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                        </div>
                        <div className="action-text">
                            <span>Eliminar chat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactProfile;
