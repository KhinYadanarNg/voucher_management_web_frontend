import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
    console.log("Printing out the getServerSession in getCurrentUser :", await getServerSession(authOptions));
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try{
        const session = await getSession();

        console.log("Printing out the session.user in getCurrentUser :", session?.user);

        if(!session?.user?.email){
            return null
        }

        const currentUser = session.user;

        if(!currentUser){
            return null
        }

        return{
            ...currentUser,
            

        };

    }catch(error: any){
        console.log("Working catch in getCurrentUser");
        console.log(error);
        return null;
    }
}