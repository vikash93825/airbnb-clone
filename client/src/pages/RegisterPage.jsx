import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, message, Space } from "antd";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Registeration Success",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Registeration Failed",
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", { name, email, password });
      success();
    } catch (error) {
      error();
    }
  };
  return (
    <>
      {contextHolder}
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max-w-md mx-auto" onSubmit={registerUser}>
            <input
              type="text"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
              Already a member?{" "}
              <Link className="text-black underline" to={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
