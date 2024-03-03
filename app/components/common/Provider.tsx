"use client";

import { ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";
interface Props {
    children: ReactNode;
}

const basePath = process.env.NEXTAUTH_URL;

const Provider = ({ children }: Props) => {
    return <SessionProvider basePath={basePath}>{children}</SessionProvider>;
};

export default Provider;