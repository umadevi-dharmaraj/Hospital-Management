import React from 'react'
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';


class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    }
  }

  callAPI (){
    fetch("http://34.94.16.78/up/users")
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}))

    
  }

  

 componentDidMount(){
    this.callAPI();
  }

  

  

  
render() {
  return (
    <div  style={{alignItems:"center",justifyContent:"center"}}>
        <h1 className='text-center text-3xl font-bold pt-20'>User Page</h1>
        <p style={{fontSize:25,margin:'10%'}}>
        {this.state.apiResponse}
        </p>
        <Link to="/" className="btn btn-primary">
          <button type="button" style={{fontSize:25,backgroundColor:"greenyellow"}} className='border py-5 px-10 mt-9'>Home</button>
        </Link>
        </div>
        
      
    
  );
}
}



export default User