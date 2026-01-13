import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Layout from "../components/Layout";

export default function Bids() {
  const { gigId } = useParams();
  const [bids, setBids] = useState([]);
  const [form, setForm] = useState({ message: "", price: "" });

  const loadBids = () => {
    api.get(`/bids/${gigId}`).then(res => setBids(res.data));
  };

  useEffect(() => {
    loadBids();
  }, [gigId]);

  const submitBid = async (e) => {
    e.preventDefault();
    await api.post("/bids", { ...form, gigId });
    setForm({ message: "", price: "" });
    loadBids();
  };

  const hire = async (id) => {
    await api.patch(`/bids/${id}/hire`);
    alert("Freelancer hired!");
    loadBids();
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Bids</h2>

      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h3 className="font-semibold mb-3">Place a Bid</h3>
        <form onSubmit={submitBid} className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            placeholder="Your proposal message"
            value={form.message}
            onChange={e=>setForm({...form,message:e.target.value})}
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Bid amount"
            value={form.price}
            onChange={e=>setForm({...form,price:e.target.value})}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit Bid
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {bids.map(b => (
          <div key={b._id} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <p className="font-medium">{b.message}</p>
              <p className="text-gray-600">₹{b.price}</p>
              <p className="text-sm mt-1">
                Status:
                <span className={
                  b.status === "hired" ? "text-green-600 ml-1" :
                  b.status === "rejected" ? "text-red-600 ml-1" :
                  "text-gray-600 ml-1"
                }>
                  {b.status}
                </span>
              </p>
            </div>

            {b.status === "pending" && (
              <button
                onClick={() => hire(b._id)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Hire
              </button>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
