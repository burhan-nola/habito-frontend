"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <h1 className="container">hello</h1>
      <button onClick={() => signIn()}>Login</button>
    </>
  );
}
