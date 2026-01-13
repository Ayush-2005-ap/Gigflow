import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Gigs() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    api.get("/gigs").then(res => setGigs(res.data));
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-10">
        <h2 className="text-3xl font-bold">Find work. Hire talent. Fast.</h2>
        <p className="mt-2 text-blue-100">
          A simple freelance marketplace to post gigs and hire freelancers.
        </p>
        <Link
          to="/create"
          className="inline-block mt-4 bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100"
        >
          Post a Gig
        </Link>
      </div>

      <h3 className="text-xl font-semibold mb-6">Open Gigs</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map(g => (
          <div
            key={g._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-semibold">{g.title}</h4>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {g.description}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-bold text-blue-600">₹{g.budget}</span>
              <Link
                to={`/bids/${g._id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View Bids →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
