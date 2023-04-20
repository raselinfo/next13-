import Link from 'next/link';
import React from 'react';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href="/">RaselOfficial</Link>
                </div>
                <div className="links">
                    <Link style={{margin:5}} href="/about">About</Link>
                    <Link style={{margin:5}} href="/about/team">Our Team</Link>
                    <Link style={{margin:5}} href="/code/repos">Code</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;