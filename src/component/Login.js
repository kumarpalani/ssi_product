import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { loginFields } from '../constants/formFields'
import Input from './Input'
import FormExtra from './FormExtra';
import FormAction from './FormAction';

const fields = loginFields;
console.log('first',fields);
let  fieldsState = {}
fields.forEach(field =>fieldsState[field.id]='');

console.log('second',fieldsState);
const users = [
    {
      username: 'admin1',
      email: "palanikumar.cs@gmail.com",
      password: '12345678'
    },
    {
      username:'admin2',
      email: "admin2s@gmail.com",
      password:'012345678'
    }
  ];

export const Login = () => {
    const [loginState,setLoginState]=useState(fieldsState);
    const [errorMessages, setErrorMessages] = useState("");
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})

        console.log(loginState);
    }

    const handleSubmit=(e)=>{
        setErrorMessages("")
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        console.log(loginState);
        const {userEmail, password} = loginState;
console.log(userEmail, password);

const isAuthenticated = users.find((user)=> user.email === userEmail && user.password === password)


return isAuthenticated ?   navigate("/products") : setErrorMessages("Wrong password or username")
    }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    <div className="space-y-px">
        {
            fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                />
            
            )
        }  
      <p className='ml-2 block text-sm text-red-900'>  {errorMessages} </p>
    </div>
  
<FormExtra />
<FormAction handleSubmit={handleSubmit} text="Login" />   

  </form>
  )
}
