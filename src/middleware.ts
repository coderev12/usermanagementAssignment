import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { CustomUser } from "./app/api/auth/[...nextauth]/options";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname == "/login" || pathname == "/admin/login") {
    return NextResponse.next();
  }

  const token = await getToken({ req: request });

  const loginSignProtected = ["/login", "register"]
  const userProtectedRoutes = ["/dashboard"];
  const administratorRoute = ["/administrator/dashboard"]
  const adminProtectedRoute = ["/admin"];
  const managerProtectedRoute = ["/manager"];

  if (token == null && administratorRoute.includes(pathname)) {
    return NextResponse.redirect(
      new URL(
        "/administrator/login?error=You dont have the access to this route",
        request.url
      )
    );
  }
  const user: CustomUser | null = token?.user as CustomUser;
  if (token == null && userProtectedRoutes.includes(pathname)) {
    return NextResponse.redirect(
      new URL(
        "/login?error=Please login first to access this route.",
        request.url
      )
    );
  }
  // console.log(user);
  if (user?.role == "User" && (adminProtectedRoute.includes(pathname) || managerProtectedRoute.includes(pathname))) {
    return NextResponse.redirect(
      new URL(
        "/dashboard?error=Don't have the access to this page"
        , request.url)

    )
  }
}
