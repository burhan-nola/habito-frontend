"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const FormEditTask = () => {
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");

  const session: any = Cookies.get("userData");
  const parseSession = session ? JSON.parse(session) : null;
  const id = parseSession ? parseSession.idDevice : null;

  useEffect(() => {
    const getUser = async () => {
      const data: AxiosResponse = await axios.get(
        `https://habito-api.vercel.app/user?id=${id}`
      );
    };
    getUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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
                <label htmlFor="owner">Detail Task 1 (Red)</label>
                <textarea
                  className="form-control"
                  id="task1"
                  value={task1}
                  onChange={(e) => setTask1(e.target.value)}
                  rows={5}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="owner">Detail Task 2 (Green)</label>
                <textarea
                  className="form-control"
                  id="task2"
                  value={task2}
                  onChange={(e) => setTask2(e.target.value)}
                  rows={5}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="owner">Detail Task 3 (Blue)</label>
                <textarea
                  className="form-control"
                  id="task3"
                  value={task3}
                  onChange={(e) => setTask3(e.target.value)}
                  rows={5}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="owner">Detail Task 4 (Yellow)</label>
                <textarea
                  className="form-control"
                  id="task4"
                  value={task4}
                  onChange={(e) => setTask4(e.target.value)}
                  rows={5}
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

export default FormEditTask;
