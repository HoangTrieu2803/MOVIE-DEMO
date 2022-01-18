import React from 'react'
import NavbarAdmin from './_component/NavbarAdmin'
import { Route, Redirect } from 'react-router-dom'
export default function Admin({exact , path , component}) {
    if(localStorage.getItem("UserAdmin")){
        return (
            <div>
                <NavbarAdmin/>
                <Route exact={exact} path={path} component={component} />
            </div>
        )
    }
    return <Redirect to="/auth"/>
}
