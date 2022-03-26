import React from "react";
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar>
            <div className="container">
                <Link className="main" to="/">
                    Main
                </Link>
            </div>
        </Navbar>
    )
}

export default Header;

const Navbar = styled.div`
    height: 100px;
    width: 100%;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    .container{
        position: relative;
        height: 100%;
    }
    .home{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: 0.5s;
        :hover{
            color: #477BFF;
        }
    }
`