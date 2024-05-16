import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link href="/" className="link link-hover">Branding</Link>
                <Link href="/" className="link link-hover">Design</Link>
                <Link href="/" className="link link-hover">Marketing</Link>
                <Link href="/" className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href="/" className="link link-hover">About us</Link>
                <Link href="/" className="link link-hover">Contact</Link>
                <Link href="/" className="link link-hover">Jobs</Link>
                <Link href="/" className="link link-hover">Press Kit</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Explore</h6>
                <Link href="/" className="link link-hover">Features</Link>
                <Link href="/" className="link link-hover">Enterprise</Link>
                <Link href="/" className="link link-hover">Security</Link>
                <Link href="/" className="link link-hover">Pricing</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link href="/" className="link link-hover">Facebook</Link>
                    <Link href="/" className="link link-hover">Linkedin</Link>
                    <Link href="/" className="link link-hover">Instagram</Link>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;