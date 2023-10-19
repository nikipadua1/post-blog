import { ReactNode, createContext, useReducer, Dispatch, useEffect } from "react";
import { Posts } from "../types/Posts";
import { PostActions, postReducer } from "../reducers/postReducer";

const STORAGE_KEY = 'postContextContent';

type PostContextType = {
    posts: Posts[];
    dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostContextProvider = ({ children }: {children: ReactNode}) => {
    const [posts, dispatch] = useReducer(
        postReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }, [posts])

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            {children}
        </PostContext.Provider>
    )
}