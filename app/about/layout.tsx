import React from 'react';


export const metadata={
    title:"RaselOfficial",
    description:"web developer.........",
    keywords:'Web development,web design,javascript,react'
}

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <h1>This is about Layout</h1>
            {children}
        </div>
    );
};

export default layout;