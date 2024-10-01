'use client'

import styles from "../page.module.css";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, setPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function MainIcon() {
  const dispatch = useDispatch();

  const handleClick = (event : any) => {
      dispatch(setPage("Home"));
      event.preventDefault();
  };

  return (
    <a href="#" onClick={handleClick} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h1 className="m-0 text-primary"><i className={styles.trash}><i className="fa fa-medkit me-3"></i></i>Drugopedia</h1></a>
  );
}
