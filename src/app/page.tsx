"use client"

import { Header } from "./components/Header";
import { UserProvider } from "./context/userLoggedContext";
import { Footer } from "./components/Footer";
import { PostContextProvider } from "./context/postsContext";
import { PostList } from "./components/PostList";
import { Posts } from "./components/Posts";



export const Page = () => {
    return(
        <PostContextProvider>
            <div className="container mx-auto w-full h-screen">
                <UserProvider>
                    <Header/>
                </UserProvider>
                <Posts/>
                <PostList/>
                <Footer />
            </div>
        </PostContextProvider>
    )
}

export default Page;