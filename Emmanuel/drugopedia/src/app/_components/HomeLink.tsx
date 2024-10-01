'use client'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, setPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function HomeLink() {
  const dispatch = useDispatch();

  const handleClick = (event : any) => {
      dispatch(setPage("Home"));
      event.preventDefault();
  };

  return (
    <a href="#" onClick={handleClick} className="nav-item nav-link active">Home</a>
  );
}
