import React from 'react'
import sign from "./images/sign.jpg";
const Signup = () => {
  return (
    <>
      <section className="signup">
      <img className="signimage" src={sign}></img>
         <div className='container mt-15'>
          <div className='signup-content'>
           
            <div className='signup-form'>
           
              <h2  className='form-title'>SignUp</h2>
             
             
              <form className='registration-form' id="registration-form"></form>
           
                <div className='form-group'>
                  
                
                  <label htmlFor='name'>
                  <i class="zmdi zmdi-account"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete='off' placeholder='Your Name' />
                </div>
                <div className='form-group'>
                  <label htmlFor='email '>
                  <i class="zmdi zmdi-email material-icons-name "></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>
                  <i class="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your Phone Number'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='work'>
                  <i class="zmdi zmdi-slideshow"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete='off' placeholder='Your Profession'/>
                  
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>
                  <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete='off' placeholder='Password'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='cpassword'>
                  <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete='off' placeholder='Confirm Your Password'/>
                </div>
                
            </div>
          </div>
         </div>
      </section>
    </>
  )
}

export default Signup