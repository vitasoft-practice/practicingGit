'use client'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, setPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function MenuEntry(props : any) {
  const dispatch = useDispatch();

  const handleClick = () => {
      dispatch(setPage(props.l));
  };

  return (
    <a onClick={handleClick} className="dropdown-item">{props.l}</a>
  );
}
