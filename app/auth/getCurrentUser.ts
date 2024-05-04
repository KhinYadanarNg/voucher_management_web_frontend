import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try{
        const session = await getSession();

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
        console.log(error);
        return null;
    }
}