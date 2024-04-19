import { connect } from "@/database/mongo.config";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse, userAgent } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import vine, { errors } from "@vinejs/vine";
import ErrorReporter from "@/validator/ErrorReporter";
import { loginSchema } from "@/validator/authValidationSchema";
import { signIn } from "next-auth/react";



export async function POST(request: NextRequest) {
    connect();
    try {
        console.log(request)
        const body = await request.json();
        vine.errorReporter = () => new ErrorReporter();
        const validator = vine.compile(loginSchema);
        const output = await validator.validate(body);
        const user = await User.findOne({ email: output.email });
        if (user) {
            const checkPassword = bcrypt.compareSync(output.password!, user.password);
            console.info("the checkpassword is", checkPassword);
            if (checkPassword) {
                return NextResponse.json(
                    { status: 200, message: "User Logged in successfully!" },
                    { status: 200 }
                );
            }
            return NextResponse.json(
                {
                    status: 400,
                    errors: {
                        email: "Please check your credentials.",
                    },
                },
                { status: 200 }
            );
        }
        return NextResponse.json(
            {
                status: 400,
                errors: {
                    email: "No User found in our system with above email.",
                },
            },
            { status: 200 }
        );

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json(
                { status: 400, errors: error.messages },
                { status: 200 }
            );
        }
        return NextResponse.json(
            { status: 400, errors: "error.message " },
            { status: 200 }
        );
    }
    // const salt = bcrypt.genSaltSync(10);
    // const password = bcrypt.hashSync("gosjdjbghdiauhwirhfaonfijfia@r343r", salt);
    // await User.create({
    //     email: "administrator1010@gmail.com",
    //     password: password,
    //     name: "Administrator",
    //     role: "Administrator",
    //     nameOfOrg: "none"
    // });

    // return NextResponse.json({
    //     status: 200,
    //     message: "Admin created successfully",
    // });
}