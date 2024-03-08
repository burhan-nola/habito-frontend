"use client";
import Cookies from "js-cookie";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function LoginPage() {
  const [device, setDevice] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { push } = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!device || !password) {
      alert("required field");
    }
    try {
      const data = {
        deviceID: device,
        password: password,
      };

      const url: string = process.env.NEXT_PUBLIC_LOGIN;
      console.log(url);
      const res: AxiosResponse = await axios.post(
        "https://habito-api.vercel.app/login",
        data
      );
      Cookies.set("userData", JSON.stringify(res.data), { expires: 1 / 24 });
      push("/dashboard");
    } catch (error: any) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <img
                  src="habito.png"
                  // className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                  style={{ paddingBottom: "20px" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="deviceID"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  placeholder="Device ID"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`btn btn-info px-5 mb-5 w-100`}
                >
                  Login
                </button>
              </div>
              <div id="emailHelp" className="form-text text-center text-dark">
                Not Registered?{" "}
                <a href="#" className="text-dark fw-bold">
                  {" "}
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
