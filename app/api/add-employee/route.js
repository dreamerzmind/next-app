import { NextResponse } from "next/server";

const employees = [];

export async function POST (request) {
    const employee = await request.json()
    employees.push(employee)
    return NextResponse.json({ employees });
}
