"use client"

import { Header } from "./components/Header";
import { UserProvider } from "./context/UserLoggedContext";
import { Footer } from "./components/Footer";
import { PostContextProvider } from "./context/PostsContext";
import { PostList } from "./components/PostList";
import { Posts } from "./components/Posts";
import { ThemeProvider } from "./context/ThemeContext";
import { Container } from "./components/Container";
import { ThemeSwitch } from "./components/ThemeSwitch";



export const Page = () => {
    return(
        <ThemeProvider>
            <PostContextProvider>
                <Container>
                    <UserProvider>
                        <Header/>
                    </UserProvider>
                    <Posts/>
                    <PostList/>
                    <Footer />
                </Container>
            </PostContextProvider>
        </ThemeProvider>
    )
}

export default Page;