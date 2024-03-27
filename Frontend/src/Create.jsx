import React from 'react';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error,setError]= useState("");

  const navigate = useNavigate();


  console.log(name, email, age);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age }
    const response = await fetch("http://localhost:5001",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addUser),

      });
    const result = await response.json()
    if (!response.ok) {
      console.log(result.error);
      setError(result.error)
    }
    if (response.ok) {
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge(0);
      navigate("/update")
    }



  }

  return (
    <div className='form-container' style={{ textAlign: 'center' }}>
      <h1>Enter the Data</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" placeholder="Your age" value={age} onChange={(e) => setAge(e.target.value)} />

        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default Create;
