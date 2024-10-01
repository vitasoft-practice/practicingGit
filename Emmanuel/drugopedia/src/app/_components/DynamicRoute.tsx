'use client'

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import DynPage from "./DynPage";
import ReadingList from "./ReadingList";

import parse from "html-react-parser";

export const dynamic = 'force-dynamic'

interface DynamicRouteProps {
  id: string;
}

function DynamicRoute({ id }: DynamicRouteProps) {

    if (id === "Home") {
        return (
          <HomePage />
        )
      }

      if (id === "Login") {
        return (
            <LoginForm />
        )
      }

      if (id === "Reading") {
        return (
            <ReadingList />
        )
      }

      console.log("Calling with: " + id)

      return ( <DynPage p={id}/> );
}

DynamicRoute.getInitialProps = ({ RootState } : any) => {
    const { dispatch } = RootState;
  }

export default DynamicRoute;