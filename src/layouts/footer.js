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
                    <Link to="/home">Home Page</Link>
                        <Link to={{
                            pathname:"countrycodes",
                            state:{
                                pageName:"Country Codes"
                            }}}>Country Codes</Link>
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