import React , {useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const [title ,setTitle] = useState('')
    const [author ,setAuthor] = useState('')
    const {dispatch} = useContext(BookContext)
    
    const addBookToList = (e) =>{
        e.preventDefault();
        dispatch({ type : 'ADD_BOOK', book : {
            title,
            author
        } })
        setTitle('')
        setAuthor('')
        
    } 
    return  (
        <form onSubmit={(e)=>{ addBookToList(e) }} >
            <input className='myinput'  required type="text"  placeholder='book title' value={title} onChange={ (e)=> setTitle(e.target.value) } />        
            <input  required type="text"   placeholder='author' value={author} onChange={ (e)=> setAuthor(e.target.value) } />        
            <input type="submit" className='btn purple darken-3' value='dalej'/>
        </form>
    );
}

export default NewBookForm;
