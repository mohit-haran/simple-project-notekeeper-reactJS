import React,{useState} from 'react';
import {Navbar, NavItem, Collapse, NavbarToggler, Nav} from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Header =() =>{
    const [isOpen,setIsOpen]=useState(false);
    return(
        <Navbar expand="md" className="navbar-dark">
            <NavLink to="/home" className="navbar-brand">Project-O-Mania</NavLink>
            <NavbarToggler onClick={()=>setIsOpen(!isOpen)}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header;
