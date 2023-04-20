import {NextResponse} from "next/server"
 import course from "./data.json"
import crypto from "crypto"
export  function GET(){
    return NextResponse.json(course)
 }


export async function POST(request:Request){
    const {title,description,level,link}=await request.json()
    // const uniqueId=crypto.randomBytes(16).toString('hex')
    const idBuffer = crypto.randomBytes(16); // 4 bytes of random data
  const uniqueId = idBuffer.readUInt32BE(0)
    course.unshift({
        id:uniqueId,
        title,
        description,
        link,
        level
    })
   return NextResponse.json({message:"Course Saved.",course})
}