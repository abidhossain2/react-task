import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useToken = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/attendance')
        try {
            const config = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
            const response = await fetch('https://test.nexisltd.com/login', config);
            const json = await response.json();
            if (response) {
                window.localStorage.setItem('access_token',JSON.stringify(json.access_token));
            }
            
        } catch (error) {
            
        }
    }



    return [setEmail, setPassword, handleSubmit]
}

export default useToken;