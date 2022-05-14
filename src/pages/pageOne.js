import React from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

function pageOne(){

return(
    <>
    <Header />
    <div className="homepage container-fluid">
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>Page One Title</h1>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>

             </div>
        </div>
        
    </div>
    <Footer />
    </>
);

}


export default pageOne;