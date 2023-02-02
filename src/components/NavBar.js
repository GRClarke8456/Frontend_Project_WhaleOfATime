import { Link } from "react-router-dom";
import logo from './assets/logo-no-background.png';
import { Button, Popover } from "antd";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";

import { MDBBtn, MDBInputGroup, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Switch } from 'antd';

const NavBar = ({element, theme}) => {

    const registerContent = (
        <div>
            <UserRegistration/>
        </div>
    )

    const loginContent = (
        <div>
            <UserLogin/>
        </div>
    )

    return ( 
        <>
        <div className={`navbar${theme}`}>


            <section className='search'>
                <form action=''>
                    <MDBContainer fluid>
                        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                        <input className='form-control' placeholder="Find an event" aria-label="Search" type='Search' />
                        <MDBBtn outline color={`${theme}`}>Search</MDBBtn>
                        </MDBInputGroup>
                    </MDBContainer> 
                </form>
            </section>
            <section>

              <MDBCol>
            <Link to=""> 
                <img className={`logo${theme}`} src={logo} width="100"  alt="Logo"/>
            </Link>
              </MDBCol>
            </section>

            <section className="toggle">
                {element}
            </section>
        <section className="userButtons">

            <section>

            <MDBCol size="auto">
                <MDBBtn outline color={`${theme}`} type='submit' className='mb-'>My Profile
                </MDBBtn>
              </MDBCol>
            
            </section>
              <section>

            <Popover content={registerContent} title="User Registration">
                <Button type="primary" className="open-register">
                    <Link to={"/register"}>Register</Link>
                </Button>
            </Popover> 
            
            <Popover content={loginContent} title="User Login">
                <button type="primary" className="open-login">
                    <Link to={"/login"}>Login</Link>
                </button>
            </Popover>
              </section>
            
        </section>

        </div>
        </>
     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

