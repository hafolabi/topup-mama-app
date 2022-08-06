import * as React from 'react';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Registerr } from '../models/note.model';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  const [errors, setErrors] = useState<{}>({});
  const [values, setValues] = useState<Registerr>({
    email: "",
    password: "",
  });
 
  const navigate = useNavigate()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=> {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <div className="form-container p-5">
      <div className="row">
        <h1 className="page-title">Register</h1>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)} noValidate>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={values?.email}
            onChange={handleChange}
          />
          <span className="error-msg"></span>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="error-msg"></span>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      {/* {Object.keys(errors).length > 0 && (
        <div className="error-box">
          <ul className="list-group">
          Object.values(errors).map((value)=>(
            <li className="list-group-item error-msg" key={value}>{value}</li>  
          ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Register;
