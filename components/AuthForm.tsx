"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { DollarSign, Loader, Loader2 } from "lucide-react";
import { authFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";

const AuthForm = ({type}: {type: string}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  console.log(type);
  const formSchema = authFormSchema(type);
  //1.Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //2.Defina a submit handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    if(type === "sign-in"){
          setTimeout(()=>{
        setIsLoading(false);
        router.push("/dashboard");
         },2000)
    }else if(type === "sign-up"){
        setTimeout(()=>{
            setIsLoading(false);
            router.push("/agreement");
             },2000)
    }
  
  };
  return (
    <section className="auth-form px-10 w-full">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/logo.svg"
            width={34}
            height={34}
            alt="YumeFinance logo"
          />
          <h1 className="text-26 font-semibold text-black">YumeFinance</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900 ">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            Please enter your details
          </p>
        </div>
      </header>
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <CustomInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                </div>
                <CustomInput
                  control={form.control}
                  name="address1"
                  label="Address"
                  placeholder="Enter your specific address"
                />
                <CustomInput
                  control={form.control}
                  name="city"
                  label="City"
                  placeholder="Enter your city"
                />
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="Example: NY"
                  />
                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Example: 11101"
                  />
                </div>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomInput
                    control={form.control}
                    name="ic"
                    label="IC"
                    placeholder="Example: 1234"
                  />
                </div>
              </>
            )}

            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="text-16 rounded-lg border font-semibold text-white "
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>

        <footer className="flex justify-center gap-1">
          <p className="text-14 font-normal text-gray-600">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="form-link"
          >
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </footer>
      </>
    </section>
  );
};

export default AuthForm;
