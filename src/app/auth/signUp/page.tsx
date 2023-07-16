"use client";

import { Footer, Header, SignUpForm } from "./components";

function AuthSignUp() {
  return (
    <div className="w-full lg:w-[25%] p-4 rounded-lg flex flex-col gap-5">
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default AuthSignUp;
