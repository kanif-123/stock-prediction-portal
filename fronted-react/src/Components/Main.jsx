import React from 'react'
import button from './Button';
const main = () => {
  return (
    <>
        <div className='container'>
           <div className='p-5 text-center bg-light-dark rounded'>
              <h1 className='text-light '> Stock Prediction Portal </h1>
              <p className='text-light lead'> At Stockwise Predictions, we believe that data is the ultimate currency. By combining cutting-edge artificial intelligence with deep financial expertise, we decode market complexities and turn raw data into actionable intelligence. Our mission is to empower everyday investors and seasoned traders alike with the predictive tools needed to stay one step ahead of the curve.</p>
              <Button text='Login' class= 'btn-outline-info'/>
            </div>  
        </div>
    </>
  )
}

export default main