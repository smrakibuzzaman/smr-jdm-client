import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const ConfirmOrder = () => {
    const { register, handleSubmit } = useForm();
    const [car, setCar] = useState({});
    const {carId} = useParams();
    const email=localStorage.getItem("email");
    useEffect(() => {
        fetch(`http://localhost:5000/carOrder/${carId}`)
          .then((res) => res.json())
          .then((data) => setCar(data));
      }, []);


      const onSubmit = data => {
        data.email=email;
        fetch("http://localhost:5000/confirmedCar",{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
       .then((result) => {
           alert("Order placed sucessfully")
           console.log(result.insertedId);
       })
        
     
    };

    return (
        <div>
             <div className="row">
<div className="col-md-6">
<Card>
  <div className="text-center">
  <Card.Img variant="top" src={car?.image} style={{ width: "50%", height: "100%" }} className="img-thumbnail mt-3" />
  </div>
  <Card.Body >
    <Card.Title> <h3>{car?.name}</h3>
    </Card.Title>
    <Card.Text>
    <p>{car?.description}</p>

    </Card.Text>
    <Card.Text>
    <h5>Price:</h5>
    <p>BDT {car?.price}</p>

    </Card.Text>
  </Card.Body>
  
  
</Card>
</div>

<div className="col-md-6">

<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Image")} placeholder="Image" defaultValue={car?.image} className="m-2 w-50"/>
      <br />
      <input {...register("name")} placeholder="Package Title" defaultValue={car?.name} className="m-2 w-50"/>
      <br />
      <input {...register("id")} placeholder="Package ID" defaultValue={car?._id} className="m-2 w-50"/>
      <br />
      <input {...register("email")} placeholder="Email" defaultValue={email}  className="m-2 w-50"/>
      <br />
      <input {...register("price", { required: true })} defaultValue={car?.price} className="m-2 w-50" />
              <br />

      <input {...register("address")} placeholder="Address" className="m-2 w-50" required/>
      <br />
     
      <input type="submit" value="Confirm Order" className="btn btn-primary"/>
    </form>

</div>

            </div>
        </div>
    );
};

export default ConfirmOrder;