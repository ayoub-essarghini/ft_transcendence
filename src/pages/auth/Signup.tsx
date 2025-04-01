import { h, useState } from "../../core/roboto.js";

export const Signup = () => {


  
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 class="text-3xl font-bold mb-4">Signup</h1>
      <form class="bg-white p-6 rounded shadow-md w-96">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
};