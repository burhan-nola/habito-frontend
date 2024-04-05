"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const FormEditData = () => {
  const { push } = useRouter();

  const [owner, setOwner] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [loading, isLoading] = useState(false);
  const session: any = Cookies.get("userData");
  const parseSession = session ? JSON.parse(session) : null;
  const id = parseSession ? parseSession.idDevice : null;
  useEffect(() => {
    const getUser = async () => {
      const data: AxiosResponse = await axios.get(
        `https://api.habito.id/user?id=${id}`
      );
      setOwner(data.data.owner);
      setOldPassword(data.data.password);
    };
    getUser();
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const editData: AxiosResponse = await axios.patch(
        `https://api.habito.id/user?id=${id}`,
        {
          owner: owner,
          password: password ? password : oldPassword,
        }
      );
      push("/dashboard");
    } catch (error: any) {
      alert(error.response.data.message);
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
              <div className="mb-3">
                <label htmlFor="owner">Change Owner</label>
                <input
                  type="text"
                  className="form-control"
                  id="owner"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="Owner"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Change Password</label>
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
                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className={`btn btn-success px-5 mb-5 w-100`}
                  >
                    Change Data
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditData;
