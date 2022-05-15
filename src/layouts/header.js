import React,{useState,useEffect } from 'react'
import { Button,Modal,Form,DropdownButton,Dropdown } from 'react-bootstrap';
import {Link,useLocation, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateUser} from '../redux1/actions';
import {UpdateEmail} from '../redux1/actions';

import * as Icon from 'react-bootstrap-icons';
function Header(props){
    const location = useLocation();

    const [ userName, setUserName ] = useState("");
    const [ userEmail, setUserEmail ] = useState("");
    const [ open, setOpen ] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    const userSide=()=>{
        return(
            <>
                {userName == "" || userName == undefined ? <Button className="login-btn" variant="primary" onClick={handleShow}>Login</Button> :  <DropdownButton id="dropdown-basic-button" title={userName}>
                    <Dropdown.Item href="#/action-2">{userEmail}</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={logOut}  >Logout</Dropdown.Item>
                </DropdownButton> 
                }
            </>
        )
    }

    const logOut =()=>{       
        setEmail("");
        setUserName("");
        setName("");
        setPassword("");
        UpdateUser("");  
        console.warn("props: ",props); 
        props.history.push("/");
    }

    useEffect(() => {
        setUserName(props.USERNAME);
        setUserEmail(props.USEREMAIL);
        
      },
[props.USERNAME]);



const openMenu=()=>{
    setOpen(!open);
}

const currentPage=(currentPageName)=>{
    switch (currentPageName) {
        case '/home':
            return "Website Name"
            break;
        case '/countrycodes':
            return "Country Codes"
            break;
            case '/contactus':
                return "Contact Us"
                break;
        default:
            return "Website Name"
            break;
    }

}


return(
    <>
    <header>
        <div className="row">
            <div className="col-md-3 col-10">
                <div className="logo-section">
                 <h1><Icon.CloudFog2Fill /> { currentPage(location.pathname)} </h1>
                </div>
            </div>
            <div className="col-md-7 col-2">
                <button className="mobile-menu-btn d-block d-sm-none" onClick={openMenu}>
                {open==true ? <Icon.X />  : <Icon.List /> }
                </button>
                <div className={"menu"}>
                    <ul>
                    <Link to="/home">Home Page</Link>
                        <Link to={{
                            pathname:"countrycodes",
                            state:{
                                pageName:"Country Codes"
                            }}}>Country Codes</Link>
                        <Link to="contactus">Contact</Link>
                    </ul>
                </div>
            </div>
            <div className="col-12 d-block d-sm-none">
            <div className={open==false ? "mobile-menu  " : "mobile-menu open"}>
                    <ul>
                    <Link to="/home">Home Page</Link>
                        <Link to={{
                            pathname:"countrycodes",
                            state:{
                                pageName:"Country Codes"
                            }}}>Country Codes</Link>
                        <Link to="contactus">Contact</Link>
                    </ul>
                    <div className="menu-bottom" >
                    {userSide()}
                </div>
                </div>
            </div>                
            <div className="col-md-2 col-sm-6 d-none d-sm-block">
                {userSide()}
            </div>
        </div>
    </header>
    </>
    
);

}

const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.userName,
    USEREMAIL: state.reducer1.userEmail,
})
export default withRouter(connect(mapStateToProps)(Header));