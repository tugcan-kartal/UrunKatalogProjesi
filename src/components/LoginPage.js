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

		const passInput=document.getElementById("psw");
		if(passInput?.value.length >= 6){
			console.log("succeed")
		}else{
			alert("Password has at least 6 characters");
			return null;
		}

		const passcopy=document.getElementById("pswcopy");
		if (passcopy.value===passInput.value) {
			console.log("succeed 2");
		}else{
			alert("passwords are not match");
			return null;
		}


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

	<div className='flex m-32 allOfItem bg-gray-100'>

		<div>
			<form>
				<div>
					<label className='block text-gray-700 text-sm font-bold'>Ad</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' onChange={(event)=>{setName(event.target.value)}} type='text' required ></input>
				</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>Soyadı</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' onChange={(event)=>{setSurname(event.target.value)}} type='text' required ></input>
				</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>Telefon Numarası</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' onChange={(event)=>{setTel(event.target.value)}} type="number" pattern="[0-9]*" inputMode="numeric" required ></input>
				</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>E-mail</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' onChange={(event)=>{setEmail(event.target.value)}} type='email' required ></input>
				</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>Şifre</label>
					<input id='psw'  className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' onChange={(event)=>{setPassword(event.target.value)}} type='password' required ></input>
				</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>Şifre Tekrarı</label>
					<input id='pswcopy' className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' type='password' required ></input>
				</div>

				<div>
            		<button className='input-common p-2 bg-gray-300 text-white m-3 hover:bg-gray-500' type='button' value='Submit' onClick={addSignUpToDB} >register</button>
          		</div>

			</form>
		</div>
		<div className='br'></div>
		<div>

			<form>
				<div>
					<label className='block text-gray-700 text-sm font-bold'>E-mail</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' type='email' required ></input>
				</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>Password</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' type='password' required ></input>
          		</div>

				<div>
					<label className='block text-gray-700 text-sm font-bold'>Remember Me</label>
					<input className='input-common p-2 bg-gray-300 text-white m-3 focus:bg-gray-400' type='checkbox' required ></input>
				</div>

				<Link to='/items'>
					<div>
						<button className='input-common p-2 bg-gray-300 text-white m-3 hover:bg-gray-500' type='button' value='Submit' onClick={loginUser} >login</button>
					</div>
				</Link>
			</form>
		</div>

	</div>
  )
}

export default LoginPage