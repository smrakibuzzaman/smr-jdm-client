import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const MyOrders = () => {
    const email = localStorage.getItem("email");
    const [userOrders, setUserOrders]=useState([]);
    const [isdelete, setIsDelete] = useState(false);
    
        useEffect(()=>{
    fetch(`https://whispering-headland-30788.herokuapp.com/userOrders/${email}`)
    .then(res=>res.json())
    .then(result=>setUserOrders(result))
        },[isdelete])
       
        
      
    
       const handleRemove= (id) => {
    fetch(`https://whispering-headland-30788.herokuapp.com/removeOrder/${id}`,{
        method: "DELETE",
        headers:{'Content-Type': 'application/json'}
    })
    .then(res=>res.json())
    .then(result=>{
    if (result.deletedCount){
        alert('Deleted Successfully')
    setIsDelete(true)
    }
    })
    
       }

       return (
        <div>
     <h1 className="text-secondary fw-bold">My Orders</h1>
     <div className="container">
               <div >
                   
                 <div className="row">
                 {
                    userOrders.map((order)=>(
                        <div className="col-md-6 col-12">
 <Card>
  <div className="text-center">
  <Card.Img variant="top" src={order.Image} style={{ width: "50%", height: "100%" }} className="img-thumbnail mt-3" />
  </div>
  <Card.Body >
    <Card.Title> <h3>{order.name}</h3>
    </Card.Title>
    <Card.Text>
    <h5>Package ID:</h5>
    <p>{order._id}</p>

    </Card.Text>
    <Card.Text>
    <h5>Price:</h5>
    <p>BDT {order.price}</p>

    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <button onClick={()=>handleRemove(order._id)}  type="button" class="btn btn-primary">Remove</button> 
   
    
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

export default MyOrders;