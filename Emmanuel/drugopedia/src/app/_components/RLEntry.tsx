'use client'

import styles from "../page.module.css";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, setPage, setBooks, selectCPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser, selectBooks } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function RLEntry(props : any) {
  const dispatch = useDispatch();
  var books = useSelector(selectBooks);
  var user = useSelector(selectUser);
  
  const handleClick = (e : any) => {
      dispatch(setPage(props.drug));
      e.preventDefault();
  };

  const removeItem = (e : any) => {

    books = books.replace(";" + props.drug + ";", ";");
    console.log(books);
    dispatch(setBooks(books));

    dispatch(setPage("Reading"));

    let res;
    const postData = async()=>{
      res = await fetch("http://localhost:3001/auth/"+user.username,{
        method: "PUT",
        headers: {
          'Accept': 'application/json',
              'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "bookmarks": books })
      });
    }
      postData();

    e.preventDefault();
};


  return (
       <>
<li key={props.drug} className="col-lg-5 col-md-8"><a className="btn btn-link" onClick={handleClick} href="#"> <i className="fa-solid fa-circle-arrow-right text-primary me-3"></i>{props.drug}</a><a className="btn btn-link" onClick={removeItem} href="#"><i className={styles.trash}><i className="fa-solid fa-trash-can"></i></i></a></li>
      </>
  );
}
