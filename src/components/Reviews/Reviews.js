import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Reviews = () => {
    const { register, handleSubmit} = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
      fetch("https://whispering-headland-30788.herokuapp.com/addSReview", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
            alert ("review added")
            console.log(result)});
  
      console.log(data);
    };
    return (
      <div>
        <h1>Customer Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field my-3"
            name="email"
            value={user?.email}
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          <textarea
            className="input-field my-3"
            name="comments"
            placeholder="Comments"
            {...register("comments", { required: true })}
          />
          <br />
  
          <input
            className="submit-btn btn btn-primary mt-3"
            type="submit"
            value="Post"
          />
        </form>
      </div>
    );
  };
  
  export default Reviews;