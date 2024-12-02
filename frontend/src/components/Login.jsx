import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            console.log(result);
            if (result.data.message === "Success") {
                console.log("Login Success");
                if (result.data.role === "admin") {
                    navigate('/admin'); // Navigate to admin page
                } else {
                    navigate('/home'); // Navigate to user home page
                }
            } else {
                alert(result.data); // Show error message
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center text-center vh-100"
            style={{
                backgroundImage: "linear-gradient(to bottom, #00d5ff, #0095ff, rgba(93,0,255,.555))",
                color: "#fff",
            }}
        >
            <div
                className="bg-white p-4 rounded shadow"
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 className="mb-4" style={{ color: '#007BFF' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label fw-bold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            style={{ borderColor: '#007BFF' }}
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="password" className="form-label fw-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            style={{ borderColor: '#007BFF' }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block w-100"
                        style={{ backgroundColor: '#007BFF', borderColor: '#007BFF' }}
                    >
                        Login
                    </button>
                </form>
                <p className="mt-3 text-muted">Don&apos;t have an account?</p>
                <Link
                    to="/register"
                    className="btn btn-outline-primary w-100"
                    style={{
                        marginTop: '10px',
                        borderRadius: '5px',
                        borderColor: '#007BFF',
                    }}
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Login;
