"use client";
import axios from "axios";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const router = useRouter();
  const session = useSession();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/users");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else if (variant === "REGISTER") {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then((res) => res.status === 200 && toast.success("Success"))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          console.log(callback);
          if (callback?.error) toast.error("Invalid credentials");

          if (callback?.ok && !callback?.error) {
            toast.success("Success");
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          console.log(callback);
          toast.success("Something wet wrong!");
        }
        if (callback?.ok && !callback?.error)
          toast.success("Success, Loged in");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {variant == "REGISTER" && (
        <Input
          id="name"
          label="Name"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
      )}
      <Input
        id="email"
        label="Email"
        register={register}
        errors={errors}
        disabled={isLoading}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        disabled={isLoading}
      />

      <Button type="submit" disabled={isLoading} fullWidth>
        {variant === "LOGIN" ? "Login" : "Register"}
      </Button>
      <div className="flex items-center gap-2">
        <span className="h-[1px] flex-1 bg-gray-200"></span>
        <span className="text-sm text-gray-400 w-fit">Or continue with</span>
        <span className="h-[1px] flex-1 bg-gray-200"></span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className="bg-gray-200 p-3 rounded w-full flex justify-center text-gray-500"
          onClick={() => socialAction("google")}
        >
          <FaGoogle />
        </button>
        <button
          type="button"
          className="bg-gray-200 p-3 rounded w-full flex justify-center text-gray-500"
          onClick={() => socialAction("github")}
        >
          <FaGithub />
        </button>
      </div>
      <hr />
      <div className="text-gray-500 text-sm">
        {variant === "LOGIN" ? "New to messenger?" : "Already have an account!"}
        <button type="button" className="ml-1" onClick={toggleVariant}>
          {variant === "LOGIN" ? "Register" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
