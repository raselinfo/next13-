import { NextResponse } from "next/server";
import courses from "../data.json"

export  function GET(request:Request){
    const {searchParams}=new URL(request.url)
    const query=searchParams.get('query')

    const searchCourse=courses.filter((course:any)=>{
        return course.title.toLowerCase().includes(query?.toLowerCase())
    })
   return NextResponse.json(searchCourse)
}