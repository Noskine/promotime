'use server'

import { comparePassword } from "@/lib/bcrypt";
import prisma from "@/lib/prisma";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  pass: z.string(),
})

export async function POST(request: Request) {
    const data = await request.json();
    try {
      schema.parse(data)
      
      const user = await prisma.user.findUnique({where: {Email: data.email}})

      if( await comparePassword(data.pass, user?.Password!) ){

        const jwtToken = sign({ id: user?.Id, email: user?.Email, }, process.env.JWT_Secret!, { expiresIn: '5s' })
        return NextResponse.json(jwtToken)
      }
    } catch (error) {
      return new NextResponse(JSON.stringify(error), {
        status: 401,
        headers: {"Content-type": "application/json"}
      })
    }
  }