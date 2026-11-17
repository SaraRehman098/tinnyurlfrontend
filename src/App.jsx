import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [longurl, setlongurl] = useState("");
  const [shorturl, setshorturl] = useState("");

  // URL Shorten Function
  async function shortTheURL(e) {
    e.preventDefault();

    try {
      const apiRes = await axios.post("http://localhost:5050/save", {
        longUrl: longurl,
      });

      setshorturl(apiRes.data.shortURL);
    } catch (err) {
      console.log("API Error:", err);
      alert("Something went wrong!");
    }
  }

  // Copy URL Function
  async function copyShortURL() {
    try {
      await navigator.clipboard.writeText(shorturl);
      alert("URL copied successfully!");
    } catch (err) {
      console.log("Copy Error:", err);
      alert("Unable to copy URL!");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 shadow-sm">
        <h1 className="text-3xl font-bold text-blue-600">
          TinyURL<span className="text-gray-800">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </div>

        <a
          href="#shortener"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="shortener"
        className="bg-blue-50 min-h-[600px] flex flex-col items-center justify-center px-5 py-20 text-center"
      >
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          Simple. Fast. Reliable.
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl leading-tight">
          Shorten Your Links,
          <span className="text-blue-600"> Share More.</span>
        </h2>

        <p className="text-gray-500 text-lg mt-5 max-w-xl">
          Make your long URLs short, simple and easy to share with TinyURL.
        </p>

        {/* URL Form */}
        <form
          onSubmit={shortTheURL}
          className="bg-white p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-3 w-full max-w-2xl mt-10"
        >
          <input
            type="url"
            required
            placeholder="Paste your long URL here..."
            value={longurl}
            onChange={(e) => setlongurl(e.target.value)}
            className="flex-1 p-4 outline-none text-gray-700 border border-gray-200 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700"
          >
            Shorten URL
          </button>
        </form>

        {/* Short URL Result */}
        {shorturl && (
          <div className="mt-6 bg-white p-5 rounded-xl shadow-md w-full max-w-2xl">
            <p className="text-gray-700 font-semibold mb-3">Your Short URL:</p>

            <div className="flex flex-col md:flex-row gap-3 items-center">
              <a
                href={shorturl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline break-all flex-1"
              >
                {shorturl}
              </a>

              <button
                type="button"
                onClick={copyShortURL}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Copy URL
              </button>
            </div>
          </div>
        )}

        <p className="text-gray-400 text-sm mt-5">
          Free URL Shortener • Easy to Use • Fast Results
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose TinyURL?
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need to manage your links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-blue-50 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Fast & Easy</h3>
            <p className="text-gray-600">
              Create short links in just a few seconds.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-purple-50 text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold mb-3">Short Links</h3>
            <p className="text-gray-600">
              Convert long URLs into short and simple links.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-green-50 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Easy Sharing</h3>
            <p className="text-gray-600">Copy and share your links anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white py-8 text-center">
        <h2 className="text-2xl font-bold mb-3">TinyURL.</h2>

        <p className="text-gray-400">
          Make your links shorter and sharing easier.
        </p>

        <p className="text-gray-500 text-sm mt-5">
          © 2026 TinyURL Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
