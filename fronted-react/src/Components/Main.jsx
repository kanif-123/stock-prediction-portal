import React from 'react'
import Button from './Button';

const Main = () => {
  return (
    <>
  
        <div className='container'>
           <div className='p-5 text-center bg-light-dark rounded'>
              <h1 className='text-light '> Stock Prediction Portal </h1>
              <p className='text-light lead'> At Stockwise Predictions, we believe that data is the ultimate currency. By combining cutting-edge artificial intelligence with deep financial expertise, we decode market complexities and turn raw data into actionable intelligence. Our mission is to empower everyday investors and seasoned traders alike with the predictive tools needed to stay one step ahead of the curve.</p>
              <Button text='Explore more' class= 'btn-outline-info' url ='/dashboard'/>
            </div>  
        </div>
    
    </>
  )
}

export default Main