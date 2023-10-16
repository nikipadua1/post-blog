import { useContext } from 'react';
import { userContext } from '../context/userLoggedContext';


export const Header = () => {
    const userCtx = useContext(userContext);

    return(
        <>
            <div className='w-full bg-gray-700 border-b p-3 border-gray-400 font-sans relative'>
                <div className='flex items-center'>
                    <div className='text-4xl font-black py-1 pb-1 pr-3 pl-3 my-3 mb-3 ml-5 bg-violet-800 rounded-md p-4'> B </div>
                    <div className='text-white ml-2 text-4xl font-black'>Blog</div>
                </div>
                <div className='text-sm text-white rounded-md mr-3 italic absolute right-0 bottom-1'> Usuário logado: {userCtx?.user} </div>
            </div> 
        </>
    )
}