import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./View.css";
import { useDispatch, useSelector } from "react-redux";

import {
  addContact,
  updateContact,
  getContact,
} from "../features/contatcs/contactSlice";

const View = () => {
  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state.contacts);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getContact(id));
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{contact.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{contact.email}</span>
          <br />
          <br />
          <strong>Status: </strong>
          <span>{contact.status}</span>
          <br />
          <br />
          <strong>Phone: </strong>
          <span>{contact.phone}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
