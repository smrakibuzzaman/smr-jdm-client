import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NewArrivals = () => {
   const [newCars, setNewCars] =useState([]);
   useEffect(()=>{
       fetch("https://whispering-headland-30788.herokuapp.com/carCollections")
       .then(res=>res.json())
       .then(data=>setNewCars(data))
   },[])
   
    return (
        <div>
            <div className="container">
               <div >
                   <h1 style={{ color: '#890717'}} className=" fw-bold"> New Arriavls </h1>
                 <div className="row">
                 {
                       newCars.slice(0,6).map(newCar=>(
                        <div className="col-md-4 col-12 mb-2">
                        <Card>
                <div className="text-center">
                <Card.Img variant="top" src={newCar.image} style={{ width: "50%", height: "100%" }} className="mt-3" />
                </div>
                <Card.Body >
                  <Card.Title> <h3>{newCar.name}</h3>
                  </Card.Title>
                 
                  <Card.Text>
                  
                  <p>{newCar.description}</p>
              
                  </Card.Text>
                  <Card.Text>
                  <h5>Price:</h5>
                  <p>BDT {newCar.price}</p>
              
                  </Card.Text>
                </Card.Body>
                
                <Card.Body>
                  <Link to={`confirmOrder/${newCar?._id}`}> <button style={{ backgroundColor: '#890717'}} type="button" class="btn text-light">Buy Now</button> </Link>
                    
                 
                  
                </Card.Body>
              </Card>
                      </div>
                       ))
                   }
                 </div>
               </div>
           </div>
        </div>
    );
};

export default NewArrivals;