'use client'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, setPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function LinkButton(props : any) {
  const dispatch = useDispatch();

  const handleClick = (e : any) => {
      dispatch(setPage(props.l));
      e.preventDefault();
  };

  return (
    <a onClick={handleClick} className="btn btn-link" href="#">{props.l}</a>
  );
}
