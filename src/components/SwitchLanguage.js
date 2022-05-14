import React from 'react'
import i18next from 'i18next'
import {Form} from 'react-bootstrap'


function SwitchLanguage(){



    const changeLang=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <>
            <Form.Group controlId="langselector" className="langselect">
                <Form.Control as="select"   onChange={(e)=>changeLang(e)} defaultValue={i18next.language}  >
                    <option value="en" >EN</option>
                    <option value="tr" >TR</option>
                </Form.Control>
            </Form.Group>
        </>
    );
}

export default SwitchLanguage;

