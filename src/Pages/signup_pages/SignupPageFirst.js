import React from 'react';
import '../style/FormStyle.css';

const SignupPageFirst = ({ formData, setFormData }) => {

    return (
        <form>
            <input className='first_name_field' type="text" placeholder='Write First Name' value={formData.first_name} onChange={e => setFormData({ ...formData, first_name: e.target.value })} /> <br /> <br /> <br /> <br />
            <input className='last_name_field' type="text" placeholder='Write Last Name' value={formData.last_name} onChange={e => setFormData({ ...formData, last_name: e.target.value })} />
        </form>

    );
};

export default SignupPageFirst;