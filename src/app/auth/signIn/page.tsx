import { SignInForm } from "./components";
import { Header, Container, Footer } from "../components";

function AuthSignIn() {
  return (
    <Container>
      <Header
        title="Entre"
        description="Entre agora e use a plataforma grátis."
      />
      <SignInForm />
      <Footer
        message="Ainda não é cadastrado ?"
        linkMessage="Crie uma conta"
        route="/auth/signUp"
      />
    </Container>
  );
}

export default AuthSignIn;
