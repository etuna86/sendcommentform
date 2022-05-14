import React,{useState,useEffect } from 'react'
import { Button,Modal,Form,DropdownButton,Dropdown } from 'react-bootstrap';
import {Link,useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateUser} from '../redux1/actions';
import {UpdateEmail} from '../redux1/actions';

import * as Icon from 'react-bootstrap-icons';
function Header(props){
    const location = useLocation();

    const [ userName, setUserName ] = useState("");
    const [ userEmail, setUserEmail ] = useState("");

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ country_code, setCountry_Code ] = useState("TR");
    const [ password, setPassword ] = useState("");
    const [ open, setOpen ] = useState(false);
    const [ emailControl, setEmailControl ] = useState(false);

    const [ nameControl, setNameControl ] = useState(false);

    const [ emailErrorMessage, setEmailErrorMessage ] = useState(false);
    const [ phoneErrorMessage, setPhoneErrorMessage ] = useState(false);
    const [ nameErrorMessage, setNameErrorMessage ] = useState(false);
    const [ passErrorMessage, setPassErrorMessage ] = useState(false);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    const userSide=()=>{
        return(
            <>
                {userName == "" || userName == undefined ? <Button className="login-btn" variant="primary" onClick={handleShow}>Login</Button> :  <DropdownButton id="dropdown-basic-button" title={userName}>
                    <Dropdown.Item href="#/action-2">{userEmail}</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={logOut}  >{t('logOut')}</Dropdown.Item>
                </DropdownButton> 
                }
            </>
        )
    }

    const login = ()=>{  

        if(name!=='' && name.length >= 4){
            setNameErrorMessage(false);
            if(emailControl){
                setEmailErrorMessage(false);
                if(password!=='' && password.length >= 6){
                    let UserInfo={
                        "name": name,
                        "email": email,
                        "password": password,
                    }
                    setPassErrorMessage(true);          
                    UpdateUser(name);
                    UpdateEmail(email);
                    setUserName(props.USERNAME);
                    setUserEmail(props.USEREMAIL);
                    console.warn("UserInfo: ",UserInfo);
                    setShow(false)
                    //axios
                }
                else{
                    setPassErrorMessage(true); 
                }
             }
             else{
                setEmailErrorMessage(true);
             }
        }
        else{
            setNameErrorMessage(true);
        }
        
    }
    const logOut =()=>{       
        setEmail("");
        setUserName("");
        setName("");
        setPassword("");
        UpdateUser("");   
    }

    useEffect(() => {
        setUserName(props.USERNAME);
        setUserEmail(props.USEREMAIL);
        
      },
[props.USERNAME]);

const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
    setEmail(e.target.value)
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(e.target.value).toLowerCase());
   if(validEmail)
        setEmailControl(true);
   else
        setEmailControl(false);
}

const changePassword=(e)=>{
    setPassword(e.target.value)
}
const openMenu=()=>{
    setOpen(!open);
}

const currentPage=(currentPageName)=>{
    switch (currentPageName) {
        case '/':
            return "Website Name"
            break;
        case '/pageone':
            return "Page One"
            break;
        case '/pagetwo':
            return "Page Two"
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
                        <Link to="/">Home Page</Link>
                        <Link to={{
                            pathname:"pageone",
                            state:{
                                pageName:"pageOne"
                            }}}>Page One</Link>
                        <Link to="pagetwo">Page Two</Link>
                        <Link to="contactus">Contact</Link>
                    </ul>
                </div>
            </div>
            <div className="col-12 d-block d-sm-none">
            <div className={open==false ? "mobile-menu  " : "mobile-menu open"}>
                    <ul>
                    <Link to="/">Home Page</Link>
                        <Link to={{
                            pathname:"pageone",
                            state:{
                                pageName:"pageOne"
                            }}}>Page One</Link>
                        <Link to="pagetwo">Page Two</Link>
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
 

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Login</Modal.Title>
          <div >  </div>
        </Modal.Header>
        <Modal.Body>
            <Form >
                <h4>Login</h4>  
                <Form.Group controlId="name">
                    <Form.Label className="mt-3">Name</Form.Label>
                    <Form.Control  type="text" placeholder="Name" value={name} onChange={(e)=>changeName(e)}  required/>
                    <div className={nameErrorMessage==false ? 'd-none' : 'danger-message'} >
                    Please enter a valid name. (must be at least 4 characters)
                        </div>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="mt-3">E-mail</Form.Label>
                    <Form.Control  type="email" placeholder="E-mail" value={email} onChange={(e)=>changeEmail(e)}  required/>
                    <div className={emailErrorMessage==false ? 'd-none' : 'danger-message'} >
                        Please enter a valid email address.
                        </div>
                </Form.Group>

                <Form.Group controlId="loginpass">
                    <Form.Label className="mt-3">password</Form.Label>
                    <Form.Control  type="password" placeholder="password"  value={password} onChange={(e)=>changePassword(e)} required />
                    <div className={passErrorMessage==false ? 'd-none' : 'danger-message'} >
                    Please enter a valid password. (must be at least 6 characters)
                        </div>
                </Form.Group>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button className="login-btn" variant="primary" type="button" onClick={login}  >
            Login
        </Button>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
      </Modal>
    </>
    
);

}

const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.userName,
    USEREMAIL: state.reducer1.userEmail,
})
export default connect(mapStateToProps)(Header);