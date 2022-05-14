import React from 'react'
import { Link } from 'react-router-dom';

function footer(){


    return(
        <>
        <footer>
            <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
             
            </div>
            <div className="col-md-8">
                <div className="menu">
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
                <p>&copy; copyright </p>
            </div>

            <div className="col-md-2">
            </div>
        </div>
        </div>
    </footer>
    </>
    )
}

export default footer;