"use client";

import { SignUpForm } from "./components";
import { Header, Container, Footer } from "../components";

function AuthSignUp() {
  return (
    <Container>
      <Header
        title="Crie sua conta"
        description="Insira seus dados, e crie sua conta grátis"
      />
      <SignUpForm />
      <Footer
        message="Já é cadastrado ?"
        linkMessage="Entrar"
        route="/auth/signIn"
      />
    </Container>
  );
}

export default AuthSignUp;
