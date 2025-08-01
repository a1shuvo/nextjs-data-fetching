"use client";

import { registerUser } from "@/app/actions/auth/registerUser";

const RegisterForm = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const payload = { username, password };
    // console.log("Registration Payload", payload);
    const result = await registerUser(payload);
    console.log(result);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form
        onSubmit={handleRegister}
        className="card w-full max-w-sm shadow-2xl bg-base-100 p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
