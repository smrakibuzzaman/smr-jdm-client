import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
   
    const onSubmit = (data) => {
      
      fetch("https://whispering-headland-30788.herokuapp.com/users/admin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) =>{ console.log(result);
          
          if (result.modifiedCount){
            
            alert('Admin Added Successfully')
        }
        });
      console.log(data);
    };
    return (
      <div>
        <h1>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
        
          <br />
  
          <input
            className="submit-btn btn btn-primary mt-3"
            type="submit"
            value="Make Admin"
          />
        </form>
      </div>
    );
  };
  
  export default MakeAdmin;
  