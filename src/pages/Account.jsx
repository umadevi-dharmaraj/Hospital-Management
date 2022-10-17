import React, {Component} from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

 var userDetails =[];
 

 const Account = () => {
  const navigate = useNavigate();

  const navigateToUser = () => {
    navigate('/user');
  };
  const { logOut, user } =  UserAuth();

  const handleSignOut = async () => {
    try {
      console.log("inside logout")
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
      alert(error)
    }
  };
  const providerdata = JSON.stringify(user)
  const displayname = user.displayName
 
  return (

    <div className='w-[300px] m-auto text-center'>
      <h1 className='text-center text-3xl font-bold pt-20'>Account</h1>
      <div>
        <p style={{fontSize:25}}>Welcome, {displayname}</p>
        
        
        
      </div>
      <button onClick={handleSignOut} style={{fontSize:25,backgroundColor:"greenyellow"}} className='border py-5 px-10 mt-9 ml-16'>
        Logout
      </button>
      <button onClick={navigateToUser} style={{fontSize:25,backgroundColor:"greenyellow"}} className='border py-5 px-10 mt-9 ml-16'>Users</button>
    </div>
  
  );
};

export default Account;