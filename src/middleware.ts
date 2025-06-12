import { AppConstant, PathConstant } from "@/constant";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AppConstant.ACCESS_TOKEN)?.value;

  // logic check token
  // if (pathname === PathConstant.LOGIN) {
  //   if (token) {
  //     return NextResponse.redirect(new URL(PathConstant.ROOT, request.url));
  //   }

  //   return NextResponse.next();
  // }
  // if (!token) {
  //   return NextResponse.redirect(new URL(PathConstant.LOGIN, request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Chỉ áp dụng cho page + API, bỏ qua static
  ],
};
