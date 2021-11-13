import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ReviewDisplay = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/review')
.then(res=>res.json())
.then(result => setReviews(result))
    },[])

    return (
        <div className="container my-5">
            <h1 style={{ color: '#890717'}} className=" fw-bold">User Reviews</h1>
            <div className="row">
{
    reviews.map(review=>(
        <div className="col-md-4 col-12 mb-2">
                        <Card>
    
                <Card.Body >
                  <Card.Title> 
                      <h6>Customer ID: {review?.email}</h6>
                        <p>Review: {review?.comments}</p>
                  </Card.Title>
                 
                </Card.Body>
                
              </Card>
                      </div>
    ))
}
            </div>
        </div>
    );
};

export default ReviewDisplay;