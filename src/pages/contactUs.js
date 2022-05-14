import React,{useState,useEffect} from 'react'
import { Button,Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import Select from 'react-select'
import Header from '../layouts/header'
import Footer from '../layouts/footer'


const countryList = [
	{ id: "TR", name: "Turkey" },
	{ id: "US", name: "United States of America" },
	{ id: "GB", name: "United Kingdom" },
	{ id: "DE", name: "Germany" },
	{ id: "SE", name: "Sweden" },
	{ id: "KE", name: "Kenya" },
	{ id: "BR", name: "Brazil" },
	{ id: "ZW", name: "Zimbabwe" }
]

function contactUs(props){


    const [ country, setCountry ] = useState([]);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ country_code, setCountry_Code ] = useState("TR");
    const [ text, setText ] = useState("");

    const [ emailClass, setEmailClass ] = useState('');
    const [ phoneClass, setPhoneClass ] = useState('');

    const [ emailControl, setEmailControl ] = useState(false);
    const [ phoneControl, setPhoneControl ] = useState(false);

    const [ nameControl, setNameControl ] = useState(false);

    const [ emailErrorMessage, setEmailErrorMessage ] = useState(false);
    const [ phoneErrorMessage, setPhoneErrorMessage ] = useState(false);
    const [ nameErrorMessage, setNameErrorMessage ] = useState(false);

    useEffect(() => {
        createSelectData();
        getUserDate();
      },
[props.USERNAME]);



const getUserDate=()=>{
    if(props.USERNAME !="" && props.USERNAME !=undefined){
        setName(props.USERNAME);
        setEmail(props.USEREMAIL);
    }
    else{
        setName("");
        setEmail("");
    }
}

const sendForm=()=>{
    let contactInfo={
        "name": name,
        "email": email,
        "phonenumber": phone,
        "country_code": country_code,
        "text": text,
    }

    const regex = /\S+@\S+/;
    var validEmail = regex.test(String(email).toLowerCase());
   if(validEmail){
    setEmailClass('green-border');
    setEmailControl(true);
   }
   else{
        setEmailControl(false);
        setEmailClass('red-border');
   }

if(name!=='' && name.length >= 4){
    setNameErrorMessage(false);
    if(validEmail){
        setEmailErrorMessage(false);
         if(phoneControl){
            console.warn("UserInfo: ",contactInfo);
            setPhoneErrorMessage(false);
            //axios
         }
         else{
            setPhoneErrorMessage(true);
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


const changeLocate=(e)=>{
    setCountry_Code(e.target.value)
}

const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
   
    setEmail(e.target.value)
    const regex = /\S+@\S+/;
    var validEmail = regex.test(String(e.target.value).toLowerCase());
   if(validEmail){
    setEmailClass('green-border');
    setEmailControl(true);
   }
   else{
        setEmailControl(false);
        setEmailClass('red-border');
   }
   
}
const changePhone=(e)=>{
    


    if (e.target.value !== undefined && e.target.value !== "" ) {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(e.target.value)) {
         
          setPhoneClass('red-border');
          setPhoneControl(false);
        }else if(e.target.value.length != 10){
          setPhoneClass('red-border');
          setPhoneControl(false);
          setPhone(e.target.value)
        }
        else{
            
            setPhoneClass('green-border');
            setPhoneControl(true);
            setPhone(e.target.value)
              
        }
      
      }
      else{
        setPhone(e.target.value)
      }
}
const changeText=(e)=>{
    setText(e.target.value)
}


const createSelectData=()=>{
    countryList.forEach((element)=>{
        country.push({label:`${element.name}`,value:`${element.id}`});
    })

  }


const emailC=()=>{
    if(emailControl !==2){
        if(emailControl ==0){
            setEmailClass('red-border');
        }
        else if(emailControl ==1){
            setEmailClass('green-border');
        }
    }
    return emailClass
     
}
const handleChange = (data) => {
    console.warn("selectedOptions: ",data);
    setCountry_Code(data.value);
  };
return(
    <>
    <Header />
    <div className="homepage container-fluid">
    
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="form-section">
                  <Form >
                    <h4>Contact Us</h4>  
                    <Form.Group controlId="cname">
                        <Form.Label className="mt-3">Name</Form.Label>
                        <Form.Control  type="text" placeholder="name" value={name} onChange={(e)=>changeName(e)}  required/>
                        <div className={nameErrorMessage==false ? 'd-none' : 'danger-message'} >
                            Please enter a valid name. (must be at least 4 characters)
                        </div>
                    </Form.Group>
                    <Form.Group controlId="cemail">
                        <Form.Label className="mt-3">E-mail</Form.Label>
                        <Form.Control   className={emailClass}  type="email" placeholder="E-mail"  value={email} onChange={(e)=>changeEmail(e)}  required/>
                        <div className={emailErrorMessage==false ? 'd-none' : 'danger-message'} >
                        Please enter a valid email address.
                        </div>
                    </Form.Group>
                    <Form.Group controlId="cphone">
                        <Form.Label className="mt-3">Phone</Form.Label>
                        <Form.Control maxLength="10"  className={phoneClass}  pattern="[0-9]*"  type="phone" placeholder="phone"   value={phone} onChange={(e)=>changePhone(e)}  required/>
                        <div className={phoneErrorMessage==false ? 'd-none' : 'danger-message'} >
                        Please enter a valid phone number.
                        </div>
                    </Form.Group>
                    <Form.Group controlId="clocateselector">
                        <Form.Label className="mt-3">Location</Form.Label>
                        <Select options={country} onChange={handleChange} defaultValue={{ label: "Turkey", value: 'TR' }} />
                    </Form.Group>

                    <Form.Group controlId="ctext"  className="mt-3">
                        <Form.Label className="mt-3">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} value={text} onChange={(e)=>changeText(e)} required />
                    </Form.Group>
                    <Button className="contact-btn mt-3" variant="primary" type="button" onClick={sendForm}  >
                        Send
                    </Button>
                </Form>
                </div>
             </div>
        </div>
        
    </div>
    <Footer />
    </>
);

}


const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.userName,
    USEREMAIL: state.reducer1.userEmail,
})

export default connect(mapStateToProps)(contactUs);