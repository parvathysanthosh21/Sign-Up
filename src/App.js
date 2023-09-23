import { Button, TextField} from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [uname,setUname] =useState(0)
  const [uemail,setEmail] =useState(0)
  const [upassword,setPass] =useState(0)
  const [cpassword,setCpass] =useState(0)
  const [isUnameValid,setIsUnameValid] = useState(true)
  const [isEmailValid,setIsEmailValid] = useState(true)
  const [isPasswordValid,setIsPasswordValid] = useState(true)
  const [isCpasswordValid,setIsCpasswordValid] = useState(true)

  const validateInput =(e)=>{
    const {name,value}= e.target
    if(name==='uname'){
      if(!!value.match(/^[A-Za-z]+$/)){
        setUname(value)
        setIsUnameValid(true)
      }else{
        setUname(value)
        setIsUnameValid(false)
      }
    }else if(name==='uemail'){
      if(!!value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
        setEmail(value)
        setIsEmailValid(true)
      }else{
        setEmail(value)
        setIsEmailValid(false)
      }
    }else if(name==='upassword'){
      if(!!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        setPass(value)
        setIsPasswordValid(true)
      }else{
        setPass(value)
        setIsPasswordValid(false)
      } 
    }else if(name==='cpassword'){
      if(value===upassword){
        setCpass(value)
        setIsCpasswordValid(true)
      }else{
        setCpass(value)
        setIsCpasswordValid(false)
      } 
    }
  }


  const handleSignUp = (e)=>{
    e.preventDefault()
    if(!uname || !uemail || !upassword || !cpassword){
       alert("Please Fill the form completely!!!")
    }else{
      alert(`User Details \n
      Name : ${uname}
      Email : ${uemail}
      Password : ${upassword}
      Confirm Password :${cpassword}
      `)
    }
 }


 
  return (
    <div style={{height:'100vh', background:'linear-gradient(to bottom right, #3333cc 0%, #990099 100%)'}} className='d-flex justify-content-center align-items-center w-100 '>
<div  style={{width:'500px'}} className='bg-light p-5 rounded'>
  
        <h3  className='text-center'>Register</h3>
        <hr />
        <form className="mt-3" onSubmit={handleSignUp}>
       
        <div className="mb-3">
        <TextField className='w-100' type='text' id="standard-basic" label="Name" variant="standard" name='uname'  onChange={(e)=>validateInput(e)}/>
        </div>
        {
          !isUnameValid && 
          <div className='mb-3 text-danger'>
            *Invalid User Input
          </div>
        }

        <div className="mb-3">
        <TextField className='w-100'type='email' id="standard-basic" label="Email" variant="standard" name='uemail' onChange={(e)=>validateInput(e)}/>
        </div>
        {
          !isEmailValid && 
          <div className='mb-3 text-danger'>
            *Invalid User Input
          </div>
        }

        <div className="mb-3">
        <TextField className='w-100' type='password' id="standard-basic" label="Password" variant="standard" name='upassword' onChange={(e)=>validateInput(e)} />
        </div>
        {
          !isPasswordValid && 
          <div className='mb-3 text-danger'>
          *Password must includes  8 characters with atleast one special character, uppercase, lowercase and number         
           </div>
        }
        <div className="mb-3">
        <TextField  disabled={upassword && isPasswordValid?false:true}  className='w-100'  type='password' id="standard-basic" label="Confirm Password" variant="standard" name='cpassword'
        onChange={(e)=>validateInput(e)}/>
        </div>
        {
          !isCpasswordValid && 
          <div className='mb-3 text-danger'>
          *Password don not match         
           </div>
        }
<div className='d-flex  justify-content-center align-items-center'>
  
          <Button type='submit' style={{border:'2px solid ' , borderRadius:'50px'}} className='submit w-75 mt-4'
          variant="outlined" disabled={isUnameValid && isEmailValid && isPasswordValid && isCpasswordValid ?false:true} >Sign Up</Button>
  
</div>

<p className='d-flex  justify-content-center align-items-center mt-3'>Have an Account? &nbsp; <a style={{textDecoration:'none'}} href="">Login Here</a></p>
        </form>
        
</div>
    </div>
  );
}
export default App;
