import React, { useState } from "react";
import styles from "../styles/apply.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

const Apply = () => {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!category) return toast.error("Add a category");
    //backend part
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        handle,
        email,
        password,
        category,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.status === "success"){
          toast("You are registered successfully ");
          localStorage.setItem("LinkTreeToken", data.token);
          setSubmitted(true);
          router.push("/login");
        }
      })
      .catch((err) => {
        toast.error("Try a different username");
      });
  };

  return (
    <>
      <section
        className={
          styles.background +
          " main min-h-screen flex justify-center items-center"
        }
      >
        <div className="main">
          <div className="content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center">
              Join the top 1% creators
            </h1>
            <p className="text-center">create Linktree for your brand</p>
            <p className="text-center py-5 font-bold text-gray-500">
              Start building your Hub
            </p>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-4 mt-5"
            >
              <span className="flex flex-row shadow-md border-2 py-2 px-3 rounded-md focus:outline-none">
                <img className="w-6 mr-4" src="/svg/ig.svg" alt="" />
                <input
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="focus:outline-none"
                  type="text"
                  placeholder="Social Handle"
                  required
                />
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-md border-2 py-2 px-3 rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md border-2 py-2 px-3 rounded-md focus:outline-none"
                type="password"
                placeholder="Sent a password"
                required
              />

              <h5 className="text-sm text-center text-indigo-500">
                Account type
              </h5>
              <span className="flex">
                <label className="flex flex-row mr-3">
                  <input
                    type="checkbox"
                    value="Creator"
                    checked={category === "Creator"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-3">Creator</p>
                </label>
                <label className="flex flex-row mr-3">
                  <input
                    type="checkbox"
                    value="Agency"
                    checked={category === "Agency"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-3">Agency</p>
                </label>
                <label className="flex flex-row mr-3">
                  <input
                    type="checkbox"
                    value="Brand"
                    checked={category === "Brand"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-3">Brand</p>
                </label>
              </span>
              <input
                className="bg-indigo-600 text-white py-2 rounded-lg cursor-pointer"
                type="submit"
                value="Apply"
              />
            </form>
          </div>
          <h4 className="text-center text-white pt-3">
            Already have an account?{" "}
            <Link className="font-bold text-red-400" href="/login">
              Login
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Apply;
