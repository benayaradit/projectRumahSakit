import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
 try {
    const data = await req.json()
    const createRegister = await prisma.register.create({data})

    if (!createRegister) {
        return NextResponse.json({status : 500, isCreated:false},{status:500})
    }else{
        return NextResponse.json({status : 200, isCreated:true},{status:200})
    }

 } catch (error) {
    return NextResponse.json({status : 500,message:`error : ${error}`, isCreated:false},{status:500})
    
 }   
}