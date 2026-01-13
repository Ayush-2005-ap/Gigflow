import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function CreateGig() {
  const [form, setForm] = useState({ title:"", description:"", budget:"" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/gigs", form);
    nav("/");
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-2">Post a new Gig</h2>
        <p className="text-gray-500 mb-6">
          Describe the work you need done.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Gig title"
            onChange={e=>setForm({...form,title:e.target.value})}
          />
          <textarea
            className="w-full border rounded-lg p-2"
            placeholder="Gig description"
            rows="4"
            onChange={e=>setForm({...form,description:e.target.value})}
          />
          <input
            className="w-full border rounded-lg p-2"
            placeholder="Budget (₹)"
            onChange={e=>setForm({...form,budget:e.target.value})}
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Publish Gig
          </button>
        </form>
      </div>
    </Layout>
  );
}
