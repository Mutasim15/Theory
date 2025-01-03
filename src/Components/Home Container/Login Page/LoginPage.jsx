import React from 'react';
import { Button } from 'react-bootstrap';
import adminImage from '../../../assets/Admin.webp'; // Replace with your admin image path
import driverImage from '../../../assets/bg.jpg'; // Replace with your driver image path
import './LoginPage.css'; // Custom CSS for styling
import { CarOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

    const navigate = useNavigate();
    const handlelogin =()=>{
        navigate('/adminlogin')
    }

    const drivernavigate =useNavigate();
    const driverlogin =()=>{
        drivernavigate('/driverlogin')
    }

    return (
        <div className="login-container d-flex vh-100">
            {/* Admin Section */}
            <div className="admin-login-section flex-grow-1 d-flex flex-column align-items-center justify-content-center p-0">
                <img
                    src={adminImage}
                    alt="Admin"
                    className="login-image mb-4"
                />
                <Button variant="primary" className="hero-button login-button" onClick={handlelogin} >
                Start as Admin <UserOutlined> </UserOutlined> 
                </Button>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Driver Section */}
            <div className="driver-login-section flex-grow-1 d-flex flex-column align-items-center justify-content-center p-0">
                <img
                    src={driverImage}
                    alt="Driver"
                    className="login-image mb-4"
                /> 
                <Button variant="success" className="hero-button login-button" onClick={driverlogin}>
                Start as Driver <CarOutlined></CarOutlined> 
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;
