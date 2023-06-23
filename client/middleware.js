import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;

  if (
    !verify &&
    (url.includes("/cart") ||
      url.includes("/wishlist") ||
      url.includes("/account") ||
      url.includes("/success") ||
      url.includes("/failure"))
  ) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (
    verify &&
    (url.includes("login") ||
      url.includes("register"))
  ) {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
