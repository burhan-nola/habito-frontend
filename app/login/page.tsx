"use client";
import Cookies from "js-cookie";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { IoMdArrowRoundBack } from "react-icons/io";

function LoginPage() {
  const [device, setDevice] = useState("");
  const [password, setPassword] = useState("");
  const [loading, isLoading] = useState(false);
  const [error, setError]: any = useState();

  const { push } = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!device) {
      // alert("required field");
      setError("*Please fill the form");
      return;
    }
    try {
      isLoading(true);
      const data = {
        id: device,
        password: password,
      };
      // const url: string = process.env.NEXT_PUBLIC_LOGIN;
      // console.log(url);
      const res: AxiosResponse = await axios.post(
        "https://api.habito.id/login",
        data
      );
      Cookies.set("userData", JSON.stringify(res.data), { expires: 1 / 24 });
      push("/dashboard");
    } catch (error: any) {
      // alert(error.response.data.message);
      setError(error.response.data.message);
      // console.log(error);
      isLoading(false);
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
                  className="form-control text-center"
                  id="deviceID"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  placeholder="Device ID"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control text-center"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
              <div className="text-center">
                {loading ? (
                  <Loader />
                ) : device == "" ? (
                  ""
                ) : (
                  <>
                    <button type="submit" className={`btn btn-info px-5 w-100`}>
                      Login
                    </button>
                    <h5 className="text-danger">{error}</h5>
                  </>
                )}
              </div>
              <div className="row">
                <div
                  id="emailHelp"
                  className="col-6 form-text text-center text-dark"
                >
                  <a href="https://habito.id/" className="text-dark fw-bold">
                    {" "}
                    <IoMdArrowRoundBack />
                    Back to News
                  </a>
                </div>
                <div
                  id="emailHelp"
                  className="col-6 form-text text-center text-dark"
                >
                  <a href="/register" className="text-dark fw-bold">
                    {" "}
                    Register here
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
