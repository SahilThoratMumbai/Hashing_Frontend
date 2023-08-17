import React,{useState} from 'react';
// import HDS from "./images/HDS.png"

const Navbar = () => {
    const [show,setShow]=useState(false);
  return (
    <div className='Navbar0'>
    <section className="navbar-bg">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#" >
      <h className="heading">Hashing In Data Structures</h>
        
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
    onClick={() =>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show?"show":""}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/services">About Us</a>
        </li>
        <li class="nav-item">
        {/* <li class="nav-item">
          <a class="nav-link" href="">Simulation</a>
        </li> */}
          <a class="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc8VP_bKiyvhC8dWq2EWYBi3zW22Yg9p35jTTsDtJ7b9Ji1tw/viewform?usp=sf_link">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Simulation</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/signup">Sign up</a>
        </li> */}
       
        
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">SignUp</button>
        <button class="btn btn-outline-success" type="submit">Login</button>
      
      </form> */}
    </div>
  </div>
</nav> 
</section>
    </div>
  )
}

export default Navbar
