import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import _ from "lodash/fp";
import Cookie from "js-cookie";
// UI and Services imports Begin's here
import Swal from "sweetalert2";
import PeaceMakerService from "../services/peaceMaker.service";
import HeaderComp from "./header.component";
import Home from "./home.component"

function Login(props) {
  // console.log(props)

  const TITLE = "Home | Login";
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    PeaceMakerService.login(data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          const accessToken = response.data.token;
          Cookie.set("access", accessToken);
          history.push("/home");
          return <Home/>
        } else {
          // setIsError(true)
          console.log(response.data);
        }
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          icon: "error",
          title: errors.value,
          text: "Login Failed!",
          // footer: "<a href>Why do I have this issue?</a>",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
        // console.log(e.response);
      });
  };

  return (
    <div style={{ background: `url('/brickwall.jpg')` }}>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <HeaderComp menuType="min" location="login" />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-8 offset-2 bg-light rounded">
            <div className="card-body">
              <h5>Login</h5>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group col-*-4">
                  <label htmlFor="inputEmail4">User Email</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="your email here"
                    ref={register({
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "should be an valid email address",
                      },
                    })}
                  />
                  {_.get("username.type", errors) === "required" && (
                    <span className="text-danger">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        size={"xs"}
                      />
                      {_.get("username.message", errors)}
                    </span>
                  )}
                  {_.get("username.type", errors) === "maxLength" && (
                    <span className="text-danger">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        size={"xs"}
                      />
                      {_.get("username.message", errors)}
                    </span>
                  )}
                  {_.get("username.type", errors) === "pattern" && (
                    <span className="text-danger">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        size={"xs"}
                      />
                      {_.get("username.message", errors)}
                    </span>
                  )}
                </div>
                <div className="form-group col-*-4">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    ref={register({
                      required: "Password is required",
                    })}
                  />
                  {_.get("password.type", errors) === "required" && (
                    <span className="text-danger">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        size={"xs"}
                      />
                      {_.get("password.message", errors)}
                    </span>
                  )}
                  {_.get("password.type", errors) === "maxLength" && (
                    <span className="text-danger">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        size={"xs"}
                      />
                      {_.get("password.message", errors)}
                    </span>
                  )}
                </div>
                <div className="form-group col-*-4">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Login;
