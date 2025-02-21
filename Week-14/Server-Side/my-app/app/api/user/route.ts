
export function GET(){
    return Response.json({
        username:"Dipit",
        email:"dipitmadan@gmail.com"

    })
}

export async function POST(req:Request, res:Response){
    // extract the body
    const body = await req.json();
    console.log(body)

    return Response.json({
        msg:"You are logged in"
    })
}