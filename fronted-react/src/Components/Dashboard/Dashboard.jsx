import React, {useEffect} from 'react'
import axios from 'axios'
import AuthProvider from './../../AuthProvider';
import axiosInstance from '../../axiosInstance';

const Dashboard = () => {

  // receive access token from axiosInstance
  // const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchProtectedData = async () =>{
      try{
        const response = await axiosInstance.get('/protected-view'

          // we add request inter
         
          
         
          // headers :{
          //   Authorization: `Bearer ${accessToken}` 
          // }
        )

        console.log('sucess:', response.data)


      }catch(error){
        console.error('error fetching data', error)
      }

  }
  fetchProtectedData();


  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard