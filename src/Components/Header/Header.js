import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import {FaUser} from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = ()=>{
    logOut()
    .then(result=>console.log('Successfully Logout'))
    .catch(error=>console.error(error))
  }

  return (
    <Navbar bg="light" variant="light">
      <Container className="d-flex justify-content-between">
        <div className="d-flex justify-content-between">
          <Link to="/">
            {" "}
            <Image src="https://preview.colorlib.com/theme/onedu/assets/img/logo/logo.png.webp"></Image>
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">
              <MdDarkMode></MdDarkMode>
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav>
            {user?.uid ? (
              <>
              <span className="me-2 mt-2">{user?.displayName}</span>
              <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    className="me-4"
                                    style= {{ height: '35px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser className="me-4"></FaUser>
                            }
                        </Link>
                <Button onClick={handleLogout} variant="primary">Log Out</Button>{" "}
              </>
            ) : (
              <>
                {" "}
                <Link className="me-4" to="/register">
                  <Button variant="primary">Sign Up</Button>{" "}
                </Link>
                <Link to="/login">
                  <Button variant="primary">Log In</Button>{" "}
                </Link>
              </>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
