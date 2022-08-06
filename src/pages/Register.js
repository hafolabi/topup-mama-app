import React, { useContext, useState } from "react";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";
import axios from 'axios'

export default function Register() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState({
    minChar: null,
    number: null,
    specialChar: null,
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const isNumberRegx = /\d/;
  const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const onChangePassword = (password) => {
    setPassword(password);
    setPasswordValidity({
      minChar: password.length >= 8 ? true : false,
      number: isNumberRegx.test(password) ? true : false,
      specialChar: specialCharacterRegx.test(password) ? true : false,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      (passwordValidity.minChar || passwordValidity.minChar || passwordValidity.minChar) === false
    ) {
      setError(true);
    }else if (
      (passwordValidity.minChar || passwordValidity.minChar || passwordValidity.minChar) === null
    ){setError(true);}
    else{
      try{
        const res = await axios.post("https://reqres.in/api/register", {
        email,
        password,
      })
      console.log(res.data)
      setError(false);
      }catch(err){
        console.log(err)
      }
    }
    
  };

  return (
    <div className="form-container p-5">
      <div className="row">
        <h1 className="page-title">Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="d-flex align-item-center">
            <input
              type={passwordType}
              className="form-control"
              placeholder="Password"
              value={password}
              onFocus={() => setPasswordFocused(true)}
              onChange={(e) => onChangePassword(e.target.value)}
            />
            <div
              className="error-msg p-2"
              style={{
                backgroundColor: "#F85619",
                color: "white",
                marginLeft: "2px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={togglePassword}
            >
              {passwordType === "password" ? "Show" : "Hide"}
            </div>
          </div>
          {error && <span style={{color:'red', fontSize:'12px'}}>Check the password inputs</span>}
        </div>

        {passwordFocused && (
          <PasswordStrengthIndicator validity={passwordValidity} />
        )}

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
