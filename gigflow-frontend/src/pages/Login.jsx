import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/login", form);
    nav("/");
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-6">Login to your account</p>

          <form onSubmit={submit} className="space-y-4">
            <input
              className="w-full border rounded-lg p-2"
              placeholder="Email"
              onChange={e=>setForm({...form,email:e.target.value})}
            />
            <input
              type="password"
              className="w-full border rounded-lg p-2"
              placeholder="Password"
              onChange={e=>setForm({...form,password:e.target.value})}
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
