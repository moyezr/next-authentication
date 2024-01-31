"use client";

// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

type Props = {}

const Social = (props: Props) => {
  return (
    <div className="flex w-full items-center gap-x-2">
        <Button
        size="lg"
        className="w-full"
        variant={"outline"}
        onClick={() => {}}
        >
            <FcGoogle className="h-5 w-5" />
        </Button>

        <Button
        size="lg"
        className="w-full"
        variant={"outline"}
        onClick={() => {}}
        >
            <FaGithub className="h-5 w-5" />
        </Button>
    </div>
  )
}

export default Social