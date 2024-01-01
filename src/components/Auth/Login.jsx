import React, { useState } from "react";
import logo from "../../assets/homePageImg.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../../constant";
import { Spinner, useToast } from "@chakra-ui/react";

export const Login = () => {
  const [formEntry, setFormEntry] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  const toast = useToast();

  async function LoginApi() {
    try {
      const loadingToastId = toast({
        title: "Login, just wait a minute",
        status: "info",
        duration: null,
        isClosable: false,
        // render: () => <Spinner size="sm" />,
      });
      setLoading(true);
      const res = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formEntry),
      });
      if (res.ok) {
        const result = await res.json();
        console.log(result);
        localStorage.setItem("token", result.token);
        navigate("/")
        toast.close(loadingToastId);
        toast({
          title: "Login Successful",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      } else {
        toast.close(loadingToastId);
        toast({
          title: "Login Failed",
          description: "Email id or Password Wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (err) {
      setLoading(false);
      toast.close(loadingToastId);
      toast({
        title: "Error try after 5 minutes",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoading(false);
      toast.close(loadingToastId);
    }
  }
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-20 object-cover"
            src={logo}
            alt="Vegetable Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formEntry.email}
                  onChange={(e) =>
                    setFormEntry({ ...formEntry, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formEntry.password}
                  onChange={(e) =>
                    setFormEntry({ ...formEntry, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  LoginApi();
                }}
                type="submit"
                disabled={loading ? true : false}
                className={
                  loading
                    ? "flex animate-pulse cursor-pointer w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "flex cursor-pointer w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                }
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 flex justify-between items-center text-center text-sm text-gray-500">
            Not a member?{" "}
            <p
              onClick={() => navigate("/register")}
              className="font-semibold cursor-pointer leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
