import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/Firebase.config'; 
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';


const Login = () => {
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError('');


        const email = e.target.email.value; 
        const password = e.target.password.value; 

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                //console.log("Login Successful!", user);
                
                toast.success(`Welcome back, ${user.displayName || user.email}!`, {
                    position: "top-center",
                    autoClose: 2000,
                });
                
                e.target.reset(); 

                setTimeout(() => {
                    navigate('/');
                    navigate(from, { replace: true });
                }, 2500);

            })
            .catch(error => {
                const errorCode = error.code;
                let displayError = 'Login Failed!';

                if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
                    displayError = 'Invalid email or user not found.';
                } else if (errorCode === 'auth/wrong-password') {
                    displayError = 'Incorrect password.';
                } else {
                    displayError = `Login Failed: ${error.message}`;
                }

                toast.error(displayError, {
                    position: "top-center",
                    autoClose: 4000,
                });
                setLoginError(displayError)
            });
    }

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content">
                <h1 className="text-2xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="w-full max-w-sm shadow-2xl bg-base-100 card shrink-0">
                    <div className="card-body">
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        {/* Login Button */}
                        <div className="mt-6 form-control">
                            <button type="submit" className="w-full text-white bg-orange-400 btn hover:bg-orange-500">Login</button>
                        </div>
                        <p className="mt-2 text-center">Don't have an account? <Link to={`/auth/register`} className="font-medium text-blue-500 underline">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;