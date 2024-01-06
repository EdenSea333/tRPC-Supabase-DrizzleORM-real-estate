import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/uielements/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/uielements/form";
import { Input } from "../components/uielements/input";
import { useToast } from "../components/uielements/use-toast";
import { Toaster } from "../components/uielements/toaster";
import {FaSearch} from 'react-icons/fa';
import { PiPhoneCallThin } from "react-icons/pi";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { PiLockKeyLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx"
import Image from "next/image";
import BackgroundImg from "../../../public/estates template images/9.jpg";
import Header  from "../components/Header"


const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2),
  });
  
  function SignUp() {
    const supabase = useSupabaseClient();
    const router = useRouter();
    const { toast } = useToast();
  
    const signUpWithPassword = async (email: string, password: string) => {
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Error with auth" + error.message,
        });
      } else if (data.user) {
        toast({
          variant: "default",
          title: "Check your email",
        });
        router.push("/signin").catch((err) => {
          console.error("Failed to navigate", err);
        });
      }
    };
  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    // 2. Define a submit handler.
    const handleSubmit= async (values: z.infer<typeof formSchema>) =>{
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        await signUpWithPassword(values.email, values.password).catch((err) => {
          console.error(err);
        });
      }
  
    return (
        <>
          <Header /> 

        <div className="flex min-h-screen items-center justify-center">
          <Image src={BackgroundImg}  className= "h-screen" alt="img" />
        <Toaster></Toaster>
        <div className="absolute w-4/12 border-solid border-2 border-slate-500 rounded-md bg-white">
            <div className="flex flex-col items-center ">
                <h1 className="m-7 text-3xl font-bold text-black  text-shadow-default " style={{textShadow: '1px 1px 1px #000000'}}>Sign Up</h1>
                <Form {...form} >
                    <form onSubmit={(event)=>{
                        event.preventDefault();
                        void form.handleSubmit(handleSubmit)()
                    }}>
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm text-black m-2 " style={{textShadow: '0px 0px 1px #000000'}}>Email</FormLabel>
                                <div className="flex items-center">
                                    <AiOutlineMail className='absolute text-slate-700 ml-2 text-sm' />
                                    <FormControl>
                                        <Input
                                            className="pl-7 lg:w-96 md:w-64 sm:32"
                                            placeholder="Email"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            
                            </FormItem>
                        )}
                        />
                        {/* <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm text-black m-2" style={{textShadow: '0px 0px 1px #000000'}}>Phone Number</FormLabel>
                                    <div className="flex items-center">
                                        <PiPhoneCallThin className='absolute text-slate-700 ml-2 text-md' />
                                        <FormControl>
                                            <Input
                                                className="w-96 pl-7"
                                                placeholder="Phone Number"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                <FormMessage />
                            
                            </FormItem>
                        )}
                        /> */}
                        {/* <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm text-black m-2" style={{textShadow: '0px 0px 1px #000000'}}>Full Name</FormLabel>
                                <div className="flex items-center">
                                        <RxPerson className='absolute text-slate-700 ml-2 text-sm' />
                                        <FormControl>
                                            <Input
                                                className="w-96 pl-7"
                                                placeholder="Full Name"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                <FormMessage />
                            
                            </FormItem>
                        )}
                        /> */}
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm text-black m-2" style={{textShadow: '0px 0px 1px #000000'}}>Password</FormLabel>
                                    <div className="flex items-center">
                                        <PiLockKeyLight className="absolute text-slate-700 ml-2 text-md" />
                                        <FormControl>
                                            <Input
                                                className="pl-7 lg:w-96 md:w-64 sm:32"
                                                type="password"
                                                placeholder="Password"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                <FormMessage />
                                <FormLabel className="text-xs text-black m-1" >Password must contain of minimum 8characters.</FormLabel>
                            </FormItem>                      
                        )}
                        />
                        {/* <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm text-black m-2" style={{textShadow: '0px 0px 1px #000000'}}>Confirm Password</FormLabel>
                                    <div className="flex items-center">
                                        <PiLockKeyLight className="absolute text-slate-700 ml-2 text-md" />
                                        <FormControl>
                                            <Input
                                                className="w-96 pl-7"
                                                placeholder="Re-enter your password"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                <FormMessage />
                            </FormItem>                      
                        )}
                        /> */}
                        <div className="hidden sm:inline justify-items-center">
                            <div className="flex m-1 xl:w-96 lg:w-64 md:w-48 sm:w-32">
                                <Button type="submit">Sign Up</Button>
                            </div>
                        </div>
                    </form>
                    <div className="">
                        <FormLabel className="text-sm text-black m-1" style={{textShadow: '0px 0px 1px #000000'}}>Already have an account?</FormLabel>
                        <Link href="/authentication/signin">
                            <FormLabel className="text-lg text-blue-500 m-1" style={{textShadow: '1px 1px 1px #ffffff'}}>Sign in</FormLabel>
                        </Link>
                    </div>
                    <FormLabel className="text-md text-black m-1" style={{textShadow: '1px 1px 1px #ffffff'}}>----------or----------</FormLabel>
                    <div className="hidden sm:inline">
                        <div className="flex justify-end m-1 xl:w-96 lg:w-64 md:w-48 sm:w-32">
                            <Button type="submit" className="mb-0 bg-white text-blue-500 text-md border-solid border-2 border-blue-500">Sign Up as a Client</Button>
                        </div>
                    </div>
                    <div className="items-center text-center mt-0 border-b-4 border-black rounded-xl mb-3 p-3">
                        <div className="flex">
                            <FormLabel className="text-sm text-black" style={{textShadow: '1px 1px 1px #ffffff'}}>By sign up, you agree to our</FormLabel>
                            <FormLabel className="text-sm text-blue-600" style={{textShadow: '1px 1px 1px #ffffff'}}>&nbsp; terms of service and</FormLabel>

                        </div>
                        <FormLabel className="text-sm text-blue-600" style={{textShadow: '1px 1px 1px #ffffff'}}>privacy and policy.</FormLabel>
                    </div>
                </Form>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default SignUp;
  