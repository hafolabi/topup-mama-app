import React, { useContext, useState } from "react";

export default function Register() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email || password === '')
    {setError(true);}
    else{
      console.log('goody')
      setError(false);
    }
    
  };

  return (
    <div className="form-container p-5">
      <div className="row">
        <h1 className="page-title" styl={{marginBottom:10}}>Login</h1>
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
              onChange={(e) => setPassword(e.target.value)}
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
          {error && <span style={{color:'red', fontSize:'12px'}}>Password field cannot be empty</span>}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
