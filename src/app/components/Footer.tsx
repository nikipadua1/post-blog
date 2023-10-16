import { useContext } from 'react';
import { userContext } from '../context/userLoggedContext';
import { PostContext } from '../context/postsContext';


export const Footer = () => {

  const postCtx = useContext(PostContext);
    return(
      <footer className='py-3 pb-3 pl-5'>
        Total de Posts: {postCtx?.posts.length}
      </footer>
    )
}