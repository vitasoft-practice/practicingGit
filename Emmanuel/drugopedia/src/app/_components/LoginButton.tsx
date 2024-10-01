'use client'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, setPage, selectCPage } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function LoginButton() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  var cPage = useSelector(selectCPage);

  var logbtext =  "Logout";

  if (!isLoggedIn) {
    logbtext =  "Login";
  }

  const handleClick = () => {
    if (!isLoggedIn) {
      dispatch(setPage("Login"));
    }
    else
    {
      if(cPage==="Reading")
      {
        dispatch(setPage("Home"));
      }
      dispatch(logout());
    }
  };

  return (
    <a onClick={handleClick} className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">{logbtext} <i className="fa fa-arrow-right ms-3"></i></a>
  );
}
