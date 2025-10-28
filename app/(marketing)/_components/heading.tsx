"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { useConvex, useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignIn, SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                Easy and efficient task management. 
                <br></br> 
                Welcome to <span className="underline">Docket </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Docket is a simple and intuitive task management tool designed to help you stay organized and productive.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button size="lg" asChild>
                    <Link href="/documents">
                        Enter Docket
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button className="bg-black text-white">
                        Get Docket free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
            
        </div>
    )
}
