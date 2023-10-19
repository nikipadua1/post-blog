import { useContext } from "react"
import { PostContext } from "../context/PostsContext"
import { ThemeContext } from "../context/ThemeContext";

export const PostList = () => {
    const postCtx = useContext(PostContext);
    const themeCtx = useContext(ThemeContext);

    const handleRemoveButton = (id:number) => {
        postCtx?.dispatch({
            type:'remove',
            payload: { id }
        });
    }

    return(
        <div className={`w-full align text-left overflow-hidden overflow-y-auto
            ${themeCtx?.theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}
        `}>
            {postCtx?.posts.map(item => (
                <div 
                key={item.id} 
                className={`my-5 border-b ml-5 mr-5 p-2
                    ${themeCtx?.theme === 'dark' ? 'border-gray-300' : 'border-gray-700'}
                `}
                >
                    <div className={`text-2xl mb-2
                        ${themeCtx?.theme === 'dark' ? 'text-violet-500' : 'text-violet-700'}
                    `}>{item.title}</div>
                    <div className="mb-2">{item.body}</div>
                    <button 
                    className={`mb-2 text-sm
                    ${themeCtx?.theme === 'dark' ? 'text-violet-300' : 'text-violet-600'}
                    `} 
                    onClick={() => handleRemoveButton(item.id)}>Remover</button>
                </div>
            ))}
        </div>
    )
}