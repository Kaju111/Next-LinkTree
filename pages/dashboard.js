import React, { useContext, useEffect, useState } from "react";
import LinkBox from "../components/LinkBox";
import UserHeader from "../components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "../context/userContext";

const dashboard = () => {
  const [data, setData] = useState({});
  const {setUserData} = useContext(UserContext)

  useEffect(() => {
    if (!localStorage.getItem("AuthToken"))
      return (window.location.href = "/login");
    fetch("http://localhost:8080/data/dashboard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("AuthToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error("Error happened");
        setData(data.userData);
        setUserData(data.userData)
        localStorage.setItem("userHandle", data.userData.handle);
        toast.success(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="">
        <UserHeader/>
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <LinkBox
              lbTitle="Links"
              lbNumber={data.links}
              lbSvg="url"
              lbTheme="red"
            />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%"
              lbSvg="growth"
              lbTheme="blue"
            />
            <LinkBox lbTitle="Growth" lbNumber="12" lbSvg="email" lbTheme="blue" />
            <LinkBox lbTitle="Growth" lbNumber="12" lbSvg="ig" lbTheme="blue" />
          </section>
          <section></section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
