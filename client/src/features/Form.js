import {useState, useEffect} from 'react';
import validator from 'validator';
 import { selectSupervisor, getSupervisor, addForm } from './formSlice';
 import {  useDispatch, useSelector } from "react-redux";

export default function Form() {
    const persons = useSelector(selectSupervisor)
    const dispatch = useDispatch() 
         
        useEffect(() => {
            dispatch(getSupervisor())
        }, []) 
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [supervisor, setSupervisor] = useState('b - Cremin, Elijah')

    const handleSubmit =(e)=> { 
        e.preventDefault()
        const form = {
            firstName: firstName,
            lastName: lastName,
            Email: email,
            phone: phone,
            supervisor: supervisor
        }
        validateInput()

        dispatch(addForm(form));
    }

    const validateInput =()=>{

        if (!/[^a-zA-Z]/.test(firstName) && !/[^a-zA-Z]/.test(lastName)){
            //  isTrue(true)
        }
        if(validator.isEmail(email)){
            //  isTrue(true)
        }

        

        if (validator.isMobilePhone(phone)){
            // isTrue(true)
            console.log('wrong p')
        }


    }

    return (
        <form className="form" onSubmit ={handleSubmit}> 
            <h1>Notification Form </h1>
                <div className="name">
                <label>First Name</label>
                <input id = "firstName" 
                        onChange={(e) => setFirstName(e.target.value)}
                        type = "text" 
                        value = {firstName}
                        required
                />
                <label>Last Name </label>
                <input id = "lastName" 
                        onChange={(e) => setLastName(e.target.value)}
                        type = "text" value = {lastName}
                        value ={lastName}
                        required
                />
            </div>
            <div className="notification">
                <h3>How would you prefer to be notified?????</h3>
                <input id="checkEmail" 
                        onChange={(e) => setEmail(e.target.value)}
                        type = "checkbox"
                        value ={email}
                /> 
                        
                <label> Email</label>
                <input id = "email" 
                        onChange={(e) => setEmail(e.target.value)}
                        type = "text"
                        value={email}
                />
                <input id = "checkPhone" type ="checkbox"/> 
                <label> Phone</label>
                <input id = "phone"
                          onChange={(e) => setPhone(e.target.value)}
                        type ="text"
                        value ={phone}
                />
            </div>
            
            <label> Supervisor</label>
            
            <select 
                    onChange={(e) => setSupervisor(e.target.value)}
                    value={supervisor} 
            >
                {persons.map(item => (
                    <option   
                        key = {item.id}
                        id ='supervisor'
                    >
                        {item.jurisdiction} - {item.lastName}, {item.firstName}
                </option>
                ))}
            </select>
            <button type = "submit" className ="submit">Submit</button>

    
    </form>

)
}