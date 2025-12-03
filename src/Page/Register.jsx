import { Link } from "react-router-dom";
import { auth } from '../Firebase/Firebase.config';
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';


const Register = () => {

    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');

    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        city: ''
    });

    const [isFormIncomplete, setIsFormIncomplete] = useState(true);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    useEffect(() => {
        const isAnyFieldEmpty = Object.values(formData).some(value => value.trim() === '');
        
        setIsFormIncomplete(isAnyFieldEmpty);
    }, [formData]);


    const handleRegister = (e) => {
        e.preventDefault();

        setSuccess('');
        setRegisterError('');

        const { name, email, password, phone, city } = formData;
        
        //console.log({ name, email, password, phone, city });

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                //console.log("Registration Successful!", user);

                setSuccess('Registration Successful!');

                updateProfile(user, {
                    displayName: name
                }).then(() => {

                    toast.success("Registration Successful! Redirecting to login...", {
                        position: "top-center",
                        autoClose: 2000, 
                    });

                    setTimeout(() => {
                        navigate('/auth/login');
                    }, 2500);
                    
                    e.target.reset();

                }).catch(error => {
                    toast.warn("Registration successful, but profile update failed.", { autoClose: 3000 });
                    setTimeout(() => {
                        navigate('/auth/login');
                    }, 3500);
                });
                
            })
            .catch(error => {
                const errorCode = error.code;
                let displayError = 'An unknown error occurred!';

                if (errorCode === 'auth/email-already-in-use') {
                    displayError = 'This email is already in use!';
                } else if (errorCode === 'auth/invalid-email') {
                    displayError = 'Please provide a valid email address!';
                } else if (errorCode === 'auth/weak-password') {
                    displayError = 'Password should be at least 6 characters.';
                } else {
                    displayError = `Registration Failed: ${error.message}`;
                }

                toast.error(displayError, {
                    position: "top-center",
                    autoClose: 4000,
                });
                setRegisterError(displayError);
            });
    }
    
    return (
        <div>
            <div className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                <div className="hero">
                    <div className="flex-col hero-content">
                        <h1 className="text-2xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="w-full max-w-2xl shadow-2xl bg-base-200 card shrink-0">
                            <div className="card-body">
                                
                                {/* Name Input Field */}
                                <div className="form-control"> 
                                    <label className="label"><span className="label-text">Name</span></label>
                                    <input 
                                        type="text"
                                        name="name"
                                        className="input input-bordered" 
                                        placeholder="Name"
                                        pattern="[A-Za-z\s]{6,}" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Email Input Field */}
                                <div className="form-control"> 
                                    <label className="label"><span className="label-text">Email</span></label>
                                    <input 
                                        type="email"
                                        name="email" 
                                        className="input input-bordered" 
                                        placeholder="Email" 
                                        required 
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Phone Input Field */}
                                <div className="form-control"> 
                                    <label className="label"><span className="label-text">Phone</span></label>
                                    <input 
                                        type="number"
                                        name="phone"
                                        className="input input-bordered" 
                                        placeholder="Phone"
                                        pattern="[0-9]{11}" 
                                        required 
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* City Input Field */}
                                <div className="form-control">
                                    <label className="label"><span className="label-text">Your City</span></label>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        className="input input-bordered" 
                                        placeholder="Where is your city?" 
                                        list="city" 
                                        value={formData.city} 
                                        onChange={handleChange} 
                                    />
                                    <datalist id="city">
                                        <option value="Dhaka"></option>
                                        <option value="Chattogram"></option>
                                        <option value="Rajshahi"></option>
                                        <option value="Khulna"></option>
                                        <option value="Barishal"></option>
                                        <option value="Sylhet"></option>
                                        <option value="Rangpur"></option>
                                        <option value="Mymensingh"></option>
                                    </datalist>
                                </div>

                                {/* Password Input Field and Checkbox */}
                                <div className="form-control">
                                    <label className="label"><span className="label-text">Password</span></label>
                                    <input 
                                        type="password"
                                        name="password" 
                                        className="input input-bordered" 
                                        placeholder="Password"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                        required 
                                        value={formData.password}
                                        onChange={handleChange}
                                    />

                                    <label className="mt-4 label">
                                        <input 
                                            type="checkbox" 
                                            className="checkbox checkbox-warning" 
                                            disabled={isFormIncomplete}
                                        />
                                    </label>
                                </div>

                                <div className="mt-4 form-control">
                                    <button type="submit" className="w-full text-white bg-orange-400 btn hover:bg-orange-500">
                                        Register
                                    </button>
                                </div>
                                <p className="mt-2 text-center">Already have an account? <Link to={`/auth/login`} className="font-medium text-blue-500 underline">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;