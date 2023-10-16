import { useContext } from "react"
import { PostContext } from "../context/postsContext"

export const PostList = () => {
    const postCtx = useContext(PostContext);
    return(
        <div className='w-full align text-left overflow-hidden overflow-y-auto'>
            {postCtx?.posts.map(item => (
                <div 
                key={item.id} 
                className="my-5 border-b border-gray-300 ml-5 mr-5"
                >
                    <div className="text-2xl text-violet-500">{item.title}</div>
                    <div className="mb-2">{item.body}</div>
                </div>
            ))}
        </div>
    )
}