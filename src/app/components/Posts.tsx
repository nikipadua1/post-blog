import {useState, useContext } from "react";
import { PostContext } from "../context/postsContext";


export const Posts = () => {
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const postCtx = useContext(PostContext);

    const handleAddButton = () => {
        if(titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput);
            setTitleInput('');
            setBodyInput('');
        }
    }

    return(
        <div className="flex justify-center bg-gray-700 h-2/5">
            <div className="flex flex-col items-center my-9 w-full">
            <input 
                type="text"
                placeholder="Título"
                className="mb-4 text-black p-2 border-2 border-violet-400 rounded-md"
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
            />
            <textarea 
                placeholder="Digite aqui seu post" 
                className="w-2/4 h-2/3 mb-4 resize-none text-black border-2 border-violet-400 rounded-md p-1 "
                value={bodyInput}
                onChange={e => setBodyInput(e.target.value)}
            />
            <button 
                className="text-white py-2 pb-2 pr-4 pl-4 rounded-md bg-violet-600 hover:bg-violet-800"
                onClick={handleAddButton}
            >Postar ➤</button>
            </div>
        </div>
    )
}