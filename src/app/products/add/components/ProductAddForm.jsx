"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductAddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    inStock: false,
    tags: "",
  });

  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: formData.name.trim(),
      category: formData.category.trim(),
      price: parseFloat(formData.price),
      inStock: formData.inStock,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        setMessage("✅ Product added successfully!");
        setFormData({
          name: "",
          category: "",
          price: "",
          inStock: false,
          tags: "",
        });
        router.push("/products");
      } else {
        const error = await res.json();
        setMessage("❌ Failed: " + error.message || "Unknown error");
      }
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-base-100 p-6 shadow-lg max-w-xl mx-auto space-y-4"
    >
      <div>
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text">Price (৳)</span>
        </label>
        <input
          type="number"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">In Stock?</span>
          <input
            type="checkbox"
            name="inStock"
            checked={formData.inStock}
            onChange={handleChange}
            className="checkbox checkbox-primary ml-2"
          />
        </label>
      </div>

      <div>
        <label className="label">
          <span className="label-text">Tags (comma separated)</span>
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g. computer, accessories"
          className="input input-bordered w-full"
        />
      </div>

      {message && <p className="text-center text-sm text-info">{message}</p>}

      <div className="text-center">
        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductAddForm;
