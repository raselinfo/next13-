import Link from 'next/link';
import React from 'react';
const courses=async()=>{
    try{
        const res=await fetch('http://localhost:3000/api/courses',{
            method:"GET",
            headers:{
                'Content-Type':"application/json",
            },
            // next:{
            //     // revalidate:60
            // }
        })
        // await new Promise(resolve=>setTimeout(resolve,3000))

        return await res.json()
    }catch(err){
        console.log((err as {message:string}).message)
    }

}


const Courses = (async() => {
   const data=await courses()
   
    return (
        <div>
            <h1>Courses</h1>{
                data.map((course:any)=>(
                    <div key={course.id}>
                         <hr />
                        <br />
                        <h1>{course.title}</h1>
                        <h3>{course.lavel}</h3>
                        <p>{course.description}</p>
                        <Link href={course.link}>{course.title}</Link>
                       
                    </div>
                ))
            }
        </div>
    );
}) as unknown as ()=>JSX.Element

export default Courses;