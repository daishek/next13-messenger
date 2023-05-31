import Logo from "../components/Logo";
import AuthForm from "./components/AuthForm";

const Home = () => {
  return (
    <main className="min-h-full flex flex-col gap-10 justify-center items-center px-6 py-12 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <figure className="mx-auto w-fit">
          <Logo />
        </figure>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-light text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="w-full max-w-lg">
        <AuthForm />
      </div>
    </main>
  );
};

export default Home;
