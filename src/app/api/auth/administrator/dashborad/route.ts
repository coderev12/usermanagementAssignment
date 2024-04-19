import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse, userAgent } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
interface UserPayload {
    name: string;
    email: string;
    password: string;
    nameOfOrg: string;
}
export async function POST(request: Request, response: Response) {
    console.log(typeof request)
    connect();
    try {
        const body: UserPayload = await request.json();
        console.log(body.nameOfOrg);
        const output = body;
        try {
            const user = await User.findOne({ email: output.email });
            if (user) {
                return NextResponse.json(
                    {
                        status: 400,
                        errors: {
                            email: "Email is already used.",
                        },
                    },
                    { status: 200 }
                );
            } else {
                // * To Hash the password
                await User.create(output);
                return NextResponse.json(
                    { status: 200, msg: "User Created successfully!" },
                    { status: 200 }
                );
            }
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json(
            { status: 400, errors: "Error! :" + error },
            { status: 200 }
        );
    }
}
export async function GET(): Promise<NextResponse> {
    connect();
    try {
        const user = await User.find();
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { status: 400, errors: "Error! :" + error },
            { status: 200 }
        );
    }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
    connect();
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id")
        console.log(id);
        if (!id) {
            return NextResponse.json({ message: "The id parameter is not defined" }, { status: 400 });
        }

        await User.findByIdAndDelete(id)
        return NextResponse.json({ message: "The user has been deleted successfully" }, { status: 200 })
    } catch (error) {
        // console.log("Error: ", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}