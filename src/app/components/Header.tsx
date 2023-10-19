import { useContext } from 'react';
import { userContext } from '../context/UserLoggedContext';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeSwitch } from './ThemeSwitch';

export const Header = () => {
    const userCtx = useContext(userContext);
    const themeCtx = useContext(ThemeContext);

    return(
        <>
            <div className={`w-full font-sans relative p-3
                ${themeCtx?.theme === 'dark' ? 'bg-gray-700 border-b border-gray-400' : 'bg-gray-200 border-b border-white'}
            `}>
                <div className='flex items-center'>
                    <div className='text-4xl font-black py-1 pb-1 pr-3 pl-3 my-3 mb-3 ml-5 bg-violet-800 rounded-md p-4'> B </div>
                    <div className='ml-2 text-4xl font-black'>Blog</div>
                </div>
                <div className='text-sm rounded-md mr-3 italic absolute right-0 bottom-1'> Usuário logado: {userCtx?.user} </div>
                <ThemeSwitch/>
            </div> 
        </>
    )
}