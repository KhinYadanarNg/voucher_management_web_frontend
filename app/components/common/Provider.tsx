"use client";

import { ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";
interface Props {
    children: ReactNode;
}


const Provider = ({ children }: Props) => {
    return <SessionProvider >{children}</SessionProvider>;
};

export default Provider;