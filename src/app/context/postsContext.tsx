import { ReactNode, createContext, useState } from "react";
import { Posts } from "../types/Posts";

type PostContextType = {
    posts: Posts[];
    addPost: (title: string, body: string) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostContextProvider = ({ children }: {children: ReactNode}) => {
    const [posts, setPosts] = useState<Posts[]>([]);

    const addPost = (title: string, body: string) => {
        setPosts([
            ...posts, {
                id: posts.length, title, body
            }
        ])
    }

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    )
}