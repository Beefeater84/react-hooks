import React from 'react'
import {NavLink} from "react-router-dom";

const Routes = () => {
    return (
        <ul id="nav-mobile">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/effect" activeClassName="active">Use Effect</NavLink></li>
            <li><NavLink to="/ref" activeClassName="active">Use Ref</NavLink></li>
            <li><NavLink to="/memo" activeClassName="active">Use Memo</NavLink></li>
            <li><NavLink to="/callback" activeClassName="active">Use Callback</NavLink></li>
            <li><NavLink to="/context" activeClassName="active">UseContext</NavLink></li>
        </ul>
    )
}

export default Routes;