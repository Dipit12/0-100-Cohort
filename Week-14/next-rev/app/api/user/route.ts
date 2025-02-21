import { NextRequest , NextResponse} from "next/server"

export async function GET(){
    return Response.json({
        name:"Dipit",
        email:"dipitmadan@gmail.com"
    })
}

export async function POST(req:NextResponse){
    const body = await req.json()
    return NextResponse.json({ name: body.name, email: body.email })
}