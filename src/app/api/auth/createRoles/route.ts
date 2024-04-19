import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse, userAgent } from "next/server";
connect();
export async function POST(request: NextRequest) {

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync("343r", salt);
    await User.create({
        email: "GoogleManager@google.com",
        password: password,
        name: "Google Manager",
        role: "Manager",
        nameOfOrg: "Google"
    });

    return NextResponse.json({
        status: 200,
        message: "Manager created successfully",
    });
}