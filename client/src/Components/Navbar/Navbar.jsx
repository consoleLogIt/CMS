import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar(props) {
    const linkStyle = {
        color:"white",
        textDecoration:"none",
        cursor:"pointer"
    }

    const handleSignOut=()=> {
    
    }
  return (
    <Container className= {styles.container} fluid>
      <Row style={{alignItems:"center"}}>
        <Col  md = {10} className = {styles.cmsTitle} style={linkStyle}>CMS Portal</Col>
        <Col>
          <Row  >
            <Col><Link style={linkStyle}>Account</Link></Col>
            <Col onClick = {handleSignOut} style ={linkStyle}>Logout</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
