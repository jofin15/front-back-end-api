import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
const [products,setProducts]=useState([])
const [search,setSearch]=useState("")
const [loading,setLoading]=useState(false)
const [error,setError]=useState(false)



useEffect(() => {
  const controller = new AbortController(); // race condition

  // using iife
  ;(async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(`/api/products?search=${search}`, {
        signal: controller.signal,
      });
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled", error.message);
        return;
      }

      setLoading(false);
      console.log(error);
      setError(true);
    }
  })();

  // cleanup
  return () => {
    controller.abort(); // Invoke the abort method
  };
}, [search]);


  return (
    <>
    <h1>Products : {products.length}</h1>
    <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
    {loading && (<h3>Loading ....</h3>)}
    {error && (<h3>Error ..</h3>)}
    {products.map((item)=>{
      return (
        <div style={{ padding: "50px" }}>
        <h2>{item.name}</h2> 
        <img src={item.image} style={{ width: "500px" }} />
        <p> price : {item.price}</p>
        <br />
        </div>

      )
    })}
    </>
  )
}

export default App
