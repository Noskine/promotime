import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { token } = await req.json()
    try {  
        if (!token) {
            return NextResponse.json('Token não fornecido.');
        }

        //@ts-ignore
        return verify(token, process.env.JWT_Secret!, (err, decode) => {
            if (err instanceof Error) {
                throw new Error(err.message)
            }

            return NextResponse.json(decode);
        });
    } catch(err) {
        return new NextResponse(JSON.stringify("Token expired or invalid"), {
            status: 401,
            headers: {"Content-type": "application/json"}
          })
    }
}