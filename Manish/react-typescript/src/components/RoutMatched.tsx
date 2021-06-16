import React from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import ParamDynamic from './ParamDynamic'

const RoutMatched = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
            <ul>
                <li>
                    <Link to={`${url}/info`}>Info</Link>
                </li>
                <li>
                    <Link to={`${url}/profile`}>Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/account`}>Account</Link>
                </li>

            </ul>
            <Switch>
                <Route exact path={path}></Route>
                <Route exact path={`${path}/:userId`}>
                    <ParamDynamic />
                </Route>

            </Switch>
        </>
    )
}

export default RoutMatched
