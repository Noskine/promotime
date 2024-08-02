import StoreRepository from "@/server/Repositories/StoreRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json(await StoreRepository.GetAll())
}

// export async function POST(req: Request) {
//     const data = await req.json()
// }