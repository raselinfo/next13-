import Link from 'next/link';
import React from 'react';

const getDirectory=async(name:string)=>{
    try{
       const res=await fetch(`https://api.github.com/repos/raselinfo/${name}/contents`) 
       const data=await res.json()
       const dir=data.filter((content:any)=> content.type==='dir')
       console.log(dir);
       
       return dir
    }catch(err){
        console.log((err as {message:string}).message)
    }   
}

const RepoDirs = (async({name}:{name:string}) => {
    const dirs=await getDirectory(name)
    return (
        <div>
            <h1>Direcotry</h1>
            {dirs?.length ===0 && <h1>No Direcotry</h1>}
            <ul>
                {
                    dirs?.map((dir:any)=>(
                        <li key={dir.paty}>
                            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}) as unknown as (params:{name:string})=> JSX.Element;

export default RepoDirs;