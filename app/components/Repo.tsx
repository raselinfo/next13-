import { NextPage } from 'next';
import {FC} from 'react';
const getRepo=async(name:string)=>{
    try{
        // await new Promise(resolve=> setTimeout(resolve,3000))
        const res=await fetch(`https://api.github.com/repos/raselinfo/${name}`,{
            next:{
                revalidate:60
            }
        })
        return await res.json()
    }catch(err){
        console.log(err)
    }
}

const Repo = (async({name}:{name:string})=>  {
    const data=await getRepo(name)
    return (
        <div>
            <hr />
            <h1>{name}</h1>
            <h3>{data.startgazers_count}</h3>
            <h3>{data.forks_count}</h3>
            <h3>{data.watchers_count}</h3>
            <hr />
        </div>
    );
}) as unknown as (props:{name:string})=> JSX.Element

export default Repo;