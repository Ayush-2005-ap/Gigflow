import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    nav("/login");
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Name"
            onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="w-full border p-2 rounded" placeholder="Email"
            onChange={e=>setForm({...form,email:e.target.value})} />
          <input type="password" className="w-full border p-2 rounded" placeholder="Password"
            onChange={e=>setForm({...form,password:e.target.value})} />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
}
