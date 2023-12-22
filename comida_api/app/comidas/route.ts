import { NextResponse, NextRequest } from "next/server";
import { comidas } from "@/mock/comida";

export function GET(req: NextRequest){
    return NextResponse.json(comidas)
}