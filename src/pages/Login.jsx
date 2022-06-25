import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const infos = {
    email: email,
    password: password,
  };
  const navigation=()=>{
    let path = `/admin`; 
    navigate(path);
  }

  

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-600 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-blue-200 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              for=""
              className="block mt-3 text-lg text-gray-700 text-center font-semibold"
            >
              Welcome back
            </label>
            
            <div className="mt-10">
              <div>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7 mb-7">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="flex mt-16 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  DocOnline
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="mt-7">
                <button
                  onClick={navigation}
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner hover:bg-blue-300 hover:text-black focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAuth;
