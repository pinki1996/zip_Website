import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
     <div>
         <div id="login">
           <div className="container ">
             <div className="col-md-8 justify-content-center">
               <div className="row   section">
                 <div className=" text-center section-title">
                   <h2>Register</h2>
                 </div>
                 <form name="sentMessage" validate>
                   <div className="row justify-content-md-center ">
                     <div className="col-md-12 text-center">
                      <div className="form-group">
                         <input
                           type="text"
                           id="name"
                           name="name"
                           className="form-control"
                           placeholder="Your Name"
                           required
                           // onChange={handleChange}
                         />
                         {/* <p className="help-block text-danger"></p> */}
                       </div>
                       <div className="form-group">
                         <input
                           type="text"
                           id="name"
                           name="name"
                           className="form-control"
                           placeholder="Email"
                           required
                           // onChange={handleChange}
                         />
                         {/* <p className="help-block text-danger"></p> */}
                       </div>
                       <div className="form-group">
                         <input
                           name="message"
                           id="message"
                           className="form-control"
                           rows="4"
                           placeholder="Password"
                           required
                           // onChange={handleChange}
                         />
                         {/* <p className="help-block text-danger"></p> */}
                       </div>
                       <div className="form-group">
                         <input
                           name="message"
                           id="message"
                           className="form-control"
                           rows="4"
                           placeholder="Re-enter Password"
                           required
                           // onChange={handleChange}
                         />
                         {/* <p className="help-block text-danger"></p> */}
                       </div>
                     </div>
                   </div>
   
                   <div id="success"></div>
                   <button
                     type="submit"
                     className="btn btn-custom btn-lg col-md-12"
                   >
                     Register
                   </button>
                 </form>
                 <p className="signup-link">
                   ALready have an account yet.{" "}
                   <Link id="signup" to="/login">
                     Login
                   </Link>
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}
