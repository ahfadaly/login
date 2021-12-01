import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
       <div className="singin container-fluid">
           <div className="row mt-3 pt-5">
              <div className="col-lg-4 col-md-6 m-auto border p-4 shadow rounded-3">
                 <div className="css-login"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="LockOutlinedIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                     </svg>
                 </div>
                     <h3 className="text-center mt-2">Sign in</h3>
                  <div className="login-form mt-4">
                       <input type="email" className="form-control mb-3" id="exampleInputEmail1" placeholder="Email Address *" aria-describedby="emailHelp"e="email" required />
                       <input type="password" className="form-control mb-3"  id="exampleInputPassword1"  placeholder="Password *" />

                     <div className="mb-3 form-check">
                           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                           <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                     </div>

                       <button type="submit" className="btn btn-primary border-0 mt-3 mb-2 w-100"><i className="fas fa-sign-in-alt mx-2"></i>log in</button>
                       <Link to="/Singup">
                           <button type="submit" className="bg-green btn btn-success border-0 mt-2 mb-2 w-100"><i className="fas fa-plus-circle mx-2"></i> Create account</button>
                       </Link>
                  </div>
                  <div className="forgot d-flex justify-content-between">
                      <Link to="/Forgot">Forgot password?</Link>
                  </div>
                  <div className="footer text-center mt-5 text-decoration-underline text-secondary">
                     <h6>Fadaly © Your Website 2021.</h6>
                  </div>
              </div>
           </div>
       </div>
    )
}
export default Login ;