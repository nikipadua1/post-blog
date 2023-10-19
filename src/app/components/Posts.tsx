import {useState, useContext, Dispatch } from "react";
import { PostContext } from "../context/PostsContext";
import { ThemeContext } from "../context/ThemeContext";


export const Posts = () => {
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const postCtx = useContext(PostContext);
    const themeCtx = useContext(ThemeContext);

    const handleAddButton = () => {
        if (titleInput && bodyInput){
            postCtx?.dispatch({
                type: 'add',
                payload: {
                    title: titleInput,
                    body: bodyInput
                }
            })
        }
        setTitleInput('');
        setBodyInput('');
    }


    return(
        <div className={`flex justify-center
             ${themeCtx?.theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}
        `}>
            <div className="flex flex-col items-center my-9 w-full h-72">
                <input 
                    type="text"
                    placeholder="Título"
                    className="mb-4 text-black p-2 border-2 border-violet-400 rounded-md"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <textarea 
                    placeholder="Digite aqui seu post" 
                    className="w-3/4 md:w-3/4 lg:w-3/5 mb-4 resize-none text-black border-2 border-violet-400 rounded-md p-1 h-4/5"
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