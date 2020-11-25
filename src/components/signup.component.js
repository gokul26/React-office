import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash/fp";

// UI and Services imports Begin's here
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import PeaceMakerService from "../services/peaceMaker.service";

function Signup(props) {
  const TITLE = "Home | Register";
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    PeaceMakerService.registeruser(data)
      .then((response) => {
        // console.log(options.data)
        Swal.fire({
          icon: "success",
          title: "Registeration Success",
          text: "Now login to Continue",
          // footer: "<a href>Why do I have this issue?</a>",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: errors[Object.keys(errors)],
          text: "Something went Wrong!!",
          // footer: "<a href>Why do I have this issue?</a>",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
        // console.log(e.response);
      });
  };

  console.log(watch("email")); // watch input value by passing the name of it
  return (
    <div className="col-md-8 bg-light align-self-center offset-md-2">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h4>Registeration</h4>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">User Email</label>
            <input
              name="email"
              type="text"
              class="form-control"
              placeholder="your email here"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "should be an valid email address",
                },
              })}
            />
            {_.get("email.type", errors) === "required" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("email.message", errors)}
              </span>
            )}
            {_.get("email.type", errors) === "maxLength" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("email.message", errors)}
              </span>
            )}
            {_.get("email.type", errors) === "pattern" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("email.message", errors)}
              </span>
            )}
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Username</label>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="your name here"
              ref={register({
                required: "Name is required",
                maxLength: {
                  value: 10,
                  message: "name length must be lesser than 10 letters",
                },
              })}
            />
            {_.get("name.type", errors) === "required" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("name.message", errors)}
              </span>
            )}
            {_.get("name.type", errors) === "maxLength" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("name.message", errors)}
              </span>
            )}
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              name="password"
              type="password"
              class="form-control"
              ref={register({
                required: "Password is required",
              })}
            />
            {_.get("password.type", errors) === "required" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("password.message", errors)}
              </span>
            )}
            {_.get("password.type", errors) === "maxLength" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("password.message", errors)}
              </span>
            )}
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress2">Confirm Password</label>
            <input
              name="confirmpass"
              type="password"
              class="form-control"
              ref={register({
                required: "Confirm Password field is required",
                validate: (value) =>
                  value === watch("password") || "Passwords don't match.",
              })}
            />
            {_.get("confirmpass.type", errors) === "required" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("confirmpass.message", errors)}
              </span>
            )}
            {_.get("confirmpass.type", errors) === "validate" && (
              <span className="text-danger">
                <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                {_.get("confirmpass.message", errors)}
              </span>
            )}
          </div>
          <div class="form-group col-md-6">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
