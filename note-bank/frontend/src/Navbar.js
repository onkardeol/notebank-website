import React from 'react'

const Navbar = () => {
    return (
        <nav className="white">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo amber-text text-lighten-2">NoteBank</a>   
                <ul className="hide-on-med-and-down right">
                    <li><a href="/LoginPage" className="amber-text text-lighten-2">Login</a></li>
                    <li><a href="/RegisterPage" className="amber-text text-lighten-2">Register</a></li>
                    <li><a href="/HomePage" className="amber-text text-lighten-2">Home</a></li>
                    <li><a href="/UploadPage" className="amber-text text-lighten-2">Upload</a></li>
                    <li><a href="#" className="amber-text text-lighten-2">Settings</a></li>
                </ul>
            </div>
        </nav>
    )
}