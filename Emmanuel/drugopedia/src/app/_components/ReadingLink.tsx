'use client'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../../lib/features/loginSlice';
import { setPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function ReadingLink() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleClick = (e : any) => {
      dispatch(setPage("Reading"));
      e.preventDefault();
  };
  
  if (isLoggedIn) 
  return (
    <a onClick={handleClick} className="nav-item nav-link" href="#">Reading List</a>
  );
}
