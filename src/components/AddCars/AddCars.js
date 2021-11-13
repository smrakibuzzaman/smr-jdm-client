import React from 'react';
import { useForm } from 'react-hook-form';

const AddCars = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
       
        fetch('https://whispering-headland-30788.herokuapp.com/addCars',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
       .then((result) => {
           alert("Car Added Sucessfully")
           console.log(result);
       })
    }

    return (
        <div>
            <h1 className="text-secondary fw-bold">Add Cars</h1>

<form onSubmit={handleSubmit(onSubmit)}>

<br />
<input {...register("name")} placeholder="Name"  className="m-2 w-50"/>
<br />
<input {...register("description")} placeholder="Description"  className="m-2 w-50"/>
<br />
<input {...register("image", { required: true })} placeholder="Image" className="m-2 w-50"/>
<br/>
<input {...register("price", { required: true })} placeholder="Price" className="m-2 w-50" />
  <br />

<input type="submit" value="Add Packages" className="btn btn-primary"/>
</form>
        </div>
    );
};

export default AddCars;