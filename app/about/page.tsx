import Link from 'next/link';
import React from 'react';
const index = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/about/team">Team Page</Link>
        </div>
    );
};

export default index;