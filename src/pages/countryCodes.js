import React,{useEffect,useState} from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import axios from 'axios';

function pageOne(){

    const [countries,setCountries] = useState([]);

useEffect(()=>{

    getCountries();

},[])



function getCountries(){
    axios.get("./data/names.json")
    .then((res)=>{
        Object.entries(res.data).forEach( entry => { 
            const [key, value] = entry;
            setCountries(countries => [...countries, {
                code:key,
                country:value,
        }])
    }) 
        
    })
}

return(
    <>
    <Header />
    <div className="homepage container-fluid">
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>Country Codes</h1>  

                    <table>
                        <tr>
                            <th>County Code</th>
                            <th>Country Name</th>
                        </tr>
                    { countries.length > 0 ? (
                        countries.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.code}</td>
                                    <td> {item.country}</td>
                                </tr>
                            )
                        })) : (<></>)
                    }
                    </table>
                </div>

             </div>
        </div>
        
    </div>
    <Footer />
    </>
);

}


export default pageOne;