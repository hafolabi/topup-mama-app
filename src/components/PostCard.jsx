import { Link } from "react-router-dom";

export default function PostCard({user}) {
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-item-center">
            <Link className="link" to="/">
              <h5 className="card-title">{user.first_name}</h5>
            </Link>
            <img
              style={{ width: "35px", height: "40px", objectFit: "cover" }}
              src={user.avatar}
              alt=""
            />
          </div>
          <Link className="link" to="/">
            <span
              style={{ color: "gray", fontSize: "12px", cursor: "pointer" }}
            >
              12:00am
            </span>
          </Link>
          <p className="small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Sed optio vitae,
          </p>
        </div>
      </div>
    </div>
  );
}
