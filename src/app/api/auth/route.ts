import { hashPassword } from "@/lib/bcrypt";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function verifyToken(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return new NextResponse(JSON.stringify({ message: 'Token não fornecido.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) {
      return new NextResponse(JSON.stringify({ message: 'Token não fornecido.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    try {
      const decoded = verify(token, process.env.JWT_SECRET!);
      return decoded;
    } catch (error: any) {
      if (error.name === 'TokenExpiredError') {
        return new NextResponse(JSON.stringify({ message: 'Token expirou.' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return new NextResponse(JSON.stringify({ message: 'Token inválido.' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
  }

export async function GET(request: NextRequest) {
    const verificationResult = await verifyToken(request)
    if (verificationResult instanceof NextResponse) {
        return verificationResult;
    }
    
    return new NextResponse(JSON.stringify({ message: 'Acesso concedido.', user : verificationResult }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
}

export async function POST(request: Request) {
  const { pass } = await request.json()
  return NextResponse.json(await hashPassword(pass))
}
