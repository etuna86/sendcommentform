import React,{useState,useEffect } from 'react'
import { Button,Modal,Form,DropdownButton,Dropdown } from 'react-bootstrap';
import {Link,useLocation,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateUser} from '../redux1/actions';
import {UpdateEmail} from '../redux1/actions';

function Login(props){
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
                    props.history.push("/home");
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



return(
    <>
    <div className="homepage container-fluid">
        <div className="row justify-content-center">
            <div className="col-4 ">
            <div className='login-section'>
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
                <Button className="login-btn mt-3" variant="primary" type="button" onClick={login}  >
                    Login
                </Button>
            </Form>
        </div>
             </div>
        </div>
        
    </div>

 

    </>
    
);

}

const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.userName,
    USEREMAIL: state.reducer1.userEmail,
})
export default withRouter(connect(mapStateToProps)(Login));