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

function Login(props) {
    // console.log(props)

    const TITLE = "Home | Login";
    const history = useHistory();
    const { register, handleSubmit, errors, } = useForm();

    const onSubmit = (data) => {
      // console.log(data);
      PeaceMakerService.login(data)
        .then((response) => {
            if (response.status === 400) {
              console.log(response)
            }
            if(response.status === 200){
              console.log(response.data)
              const accessToken = response.data.token;
              Cookie.set("access", accessToken);
              history.push("/");
            }
            else
            {
              // setIsError(true)
              console.log(response.data)
            }
            
        })
        .catch(e => {
          console.log(e)
          Swal.fire({
            icon: "error",
            title: errors.value,
            text: 'Login Failed!',
            // footer: "<a href>Why do I have this issue?</a>",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          });
          // console.log(e.response);
        });
    };
    
    
    return (
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
      <HeaderComp menuType="min" location ={this.props.location}/>
      <br/>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-8 bg-light align-self-center offset-md-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-group col-md-6">
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
                      <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                      {_.get("username.message", errors)}
                    </span>
                  )}
                  {_.get("username.type", errors) === "maxLength" && (
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                      {_.get("username.message", errors)}
                    </span>
                  )}
                  {_.get("username.type", errors) === "pattern" && (
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faExclamationTriangle} size={"xs"} />
                      {_.get("username.message", errors)}
                    </span>
                  )}
                </div>
                <div className="form-group col-md-6">
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
                <div className="form-group col-md-6">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <form class="form-signin">
              <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
          </div>
        </div>
      </div>
      
      {/* <FooterComp/> */}
      </div>
    );
}

export default Login