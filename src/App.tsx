import React from 'react';
import {Container} from "react-bootstrap";
import {BrowserRouter, Navigate, useRoutes} from 'react-router-dom';
import './App.css';
import identityService from "./services/IdentityService";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    const isLoggedIn = identityService.isLoggedIn()
    const routes = [
        {
            path: '/',
            element: isLoggedIn ? <HomePage/> : <Navigate to={'/sign-up'}/>
        },
        {
            path: '/sign-up',
            element: !isLoggedIn ? <SignUpPage/> : <Navigate to={'/'}/>
        },
        {
            path: '*',
            element: <Navigate to={'/'}/>
        }
    ]
    return useRoutes(routes)
}

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <Container fluid={true}>
                <App/>
            </Container>
        </BrowserRouter>
    );
}

export default AppWrapper;