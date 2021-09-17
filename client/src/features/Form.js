import {useState, useEffect} from 'react';
import validator from 'validator';
 import { selectSupervisor, getSupervisor, addForm } from './formSlice';
 import {  useDispatch, useSelector } from "react-redux";
// import { $CombinedState } from 'redux'

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
    const [condition,isTrue] = useState(true)
    let form ={}

    const handleSubmit =(e)=> { 
        e.preventDefault()
        // alert(document.getElementById("checkPhone").checked)
      
       
        validateInput()
        console.log(condition)

        if(condition){
            if(document.getElementById("checkPhone").checked) {

                 form = {
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    supervisor: supervisor
                }
               console.log(form)     
          }
          if(document.getElementById("checkEmail").checked) {
             form = {
                firstName: firstName,
                lastName: lastName,
                Email: email,
                supervisor: supervisor
            }
            console.log(form)     


      } 
      
      if(!document.getElementById("checkEmail").checked && !document.getElementById("checkPhone").checked){
        form = {
            firstName: firstName,
            lastName: lastName,
            Email: email,
            phone: phone,
            supervisor: supervisor
        }
        console.log(form)

      }

          
            dispatch(addForm(form))
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setSupervisor('b - Cremin, Elijah')
            document.getElementById("checkEmail").checked = false
            document.getElementById("checkPhone").checked = false

        }
    }

    const validateInput =()=>{
        console.log(firstName, lastName, email, phone, supervisor)
        if (/[^a-zA-Z]/.test(firstName) || /[^a-zA-Z]/.test(lastName)){

            isTrue(false)
            alert('No numbers are allowed')


        }
        if(validator.isEmail(email) && validator.isEmpty(email)){
            isTrue(false)

            alert('Please enter valid email address')
        }

        

        if (validator.isMobilePhone(phone)&& validator.isEmpty(phone)){
            isTrue(false)
            alert('Please enter valid phone')
        }


    }

    const handleNotification = (e) => {
            if(e==1){
                document.getElementById("checkPhone").checked = false
            }
            if(e==2){
                document.getElementById("checkEmail").checked = false
             }

    }

    return (
        <form className="form" onSubmit ={handleSubmit}> 
            <h1 className="h1">Notification Form </h1>
            <div className="body">
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
                        type = "text" 
                        value ={lastName}
                        required
                />
           
            <div className="notification">
                <h3>How would you prefer to be notified?</h3>
            

                <input id="checkEmail" 
                        onChange={(e)=> handleNotification(e.target.value)}
                        type = "checkbox"
                        value = "1"
                /> 
                        
                <label> Email</label>
                <input id = "email" 
                        onChange={(e) => setEmail(e.target.value)}
                        type = "text"
                        value={email}
                        //  disabled
                />
                <input id = "checkPhone" 
                        onChange={(e)=> handleNotification(e.target.value)}
                        // onChange={handleNotification}
                        type ="checkbox" value ="2"/> 
                <label> Phone</label>
                <input id = "phone"
                          onChange={(e) => setPhone(e.target.value)}
                        type ="text"
                        value ={phone}
                        // disabled
                />
            </div>
                <div className="svisor">
                        <label> Supervisor</label>
                            
                            <select 
                                    onChange={(e) => setSupervisor(e.target.value)}
                                    value={supervisor} 
                                    className = "dropdown"
                                
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
                            <div className = "divSubmit">
                                <button type = "submit" className ="submit">Submit</button>
                            </div>    
                </div>                    
            </div>
    
        </form>

)
}