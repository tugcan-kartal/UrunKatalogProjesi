import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {

	const [name,setName]=useState("");
	const [surname,setSurname]=useState("");
	const [tel,setTel]=useState("");
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");

	const addSignUpToDB=async(event)=>{
		const {data} = await Axios.post('https://assignment-api.piton.com.tr/api/v1/user/register',{name: name,password: password,email: email});
		const token=data.token;
		event.preventDefault();
	}

	const loginUser=async(event)=>{
		const {data}=await Axios.post('https://assignment-api.piton.com.tr/api/v1/user/login',{password: password,email: email});
		const token=data.token;
		localStorage.setItem("token",token);
		event.preventDefault();
	}

  return (

	<div className='allOfPage'>

		<div className='fullOfSignUp'>
			<form>
				<div className='commoninput'>
					Ad
					<input className='styleinput' onChange={(event)=>{setName(event.target.value)}} type='text' required ></input>
				</div>

				<div className='commoninput'>
					Soyadı
					<input className='styleinput' onChange={(event)=>{setSurname(event.target.value)}} type='text' required ></input>
				</div>

				<div className='commoninput'>
					Telefon Numarası
					<input className='styleinput' onChange={(event)=>{setTel(event.target.value)}} type='number' required ></input>
				</div>

				<div className='commoninput'>
					E-mail
					<input className='styleinput' onChange={(event)=>{setEmail(event.target.value)}} type='email' required ></input>
				</div>

				<div className='commoninput'>
					Şifre
					<input className='styleinput' onChange={(event)=>{setPassword(event.target.value)}} type='password' required ></input>
				</div>

				<div className='commoninput'>
					Şifre Tekrarı
					<input className='styleinput' type='password' required ></input>
				</div>

				<div className='commoninput'>
            		<button className='styleinputSubmit' type='button' value='Submit' onClick={addSignUpToDB} >register</button>
          		</div>

			</form>
		</div>

		<div className='fullOfSignIn'>

			<form>
				<div className='commoninput'>
					E-mail
					<input className='styleinput' type='email' required ></input>
				</div>

				<div className='commoninput'>
					Password
					<input className='styleinput' type='password' required ></input>
          		</div>

				<div className='commoninput'>
					Remember Me
					<input className='styleinput' type='checkbox' required ></input>
				</div>

				<Link to='/items'>
					<div className='commoninput'>
						<button className='styleinputSubmit' type='button' value='Submit' onClick={loginUser} >login</button>
					</div>
				</Link>
				
			</form>
		</div>

	</div>
  )
}

export default LoginPage