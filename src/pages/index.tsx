import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Header  from "./components/Header"
import Footer from "./components/Footer";
import Head from "next/head";
import Link from "next/link";
import LandBackground from "../../public/estates template images/9.jpg";
import { api } from "../utils/api";
import SignIn from "./authentication/signin";
import SignUp from "./authentication/signup";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header /> 
      <div>
        <Image src={LandBackground}  className= "h-screen" alt="img" />
        {/* <SignUp /> */}
      </div>
      {/* <SignIn /> */}
      {/* <Footer /> */}
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
