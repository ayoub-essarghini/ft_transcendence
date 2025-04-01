import { h, useState } from "../../core/roboto.js";

export const Login = () => {
  return (
    <div class="w-full login-page flex items-center justify-center h-screen bg-[var(--color-primary)] text-[#fff] overflow-hidden">
      <img
        class="light-effect absolute bottom-0 z-0 -left-28 h-screen animate-[pulse_5s_ease-in-out_infinite] mix-blend-plus-darker opacity-75"
        src="public/assets/images/light.png"
        alt=""
      />
      <img
        class="player-img absolute -bottom-3 -left-16 animate-[float_3s_ease-in-out_infinite] mix-blend-plus-darker"
        src="public/assets/images/player.png"
        alt=""
      />
      <div
        class="h-3/4 sm:w-10/12 md:w-2/3 lg:w-2/6 flex flex-col justify-center 
      items-center gap-4 bg-gradient-to-br from-[var(--color-primary)] to-[#202E9F] 
       px-5 py-10 border border-[var(--color-secondary)] rounded-lg shadow-lg shadow-[#4395ff7a] "
      >
        <h1 class="text-5xl">Welcome back !</h1>
        <p class="text-gray-200">Welcome To Ping Pong game</p>
        <form class="w-full flex flex-col justify-center items-center gap-3 m-auto z-10">
          <div class="w-9/12 flex flex-col  gap-1">
            <label for="username">Username</label>
            <input
              autocomplete="off"
              class="w-full bg-transparent appearance-none outline-none border text-gray-200 border-gray-200 px-3 py-2.5 rounded-md focus:border-[var(--color-secondary)]"
              type="text"
              id="username"
              placeholder="username"
            />
          </div>
          <div class="w-9/12 flex flex-col gap-1">
            <label for="password">Password</label>
            <input
              class="w-full bg-transparent appearance-none outline-none border text-gray-200 border-gray-200 px-2 py-2.5 rounded-md focus:border-[var(--color-secondary)]"
              type="password"
              id="password"
              placeholder="password"
            />
          </div>

          <a href="#" class="text-[var(--color-secondary)] ">
            Forget password?
          </a>

          <div class="w-full flex justify-center items-center">
            <button
              class="w-8/12 rounded-lg border-none px-5 py-3 bg-[var(--color-secondary)]
              text-xl
             hover:bg-[#3a8fffee]
              "
            >
              Login
            </button>
          </div>
        </form>
        <div class="flex items-center justify-center my-1 w-full">
          <div class="w-20 border-t border-[#fff]"></div>
          <span class="mx-4 text-[#fff]">OR</span>
          <div class="w-20 border-t border-[#fff]"></div>
        </div>

        <button class="w-9/12 flex items-center justify-center space-x-3 bg-gray-300 text-gray-900 border border-gray-300 rounded-lg py-2 px-4 shadow-sm hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            class="w-5 h-5"
            alt="Google Logo"
          />
          <span>Sign in with Google</span>
        </button>

        <button class="w-9/12 flex items-center justify-center space-x-3 bg-gray-300 text-gray-900 border border-gray-300 rounded-lg py-2 px-4 shadow-sm hover:bg-gray-100 transition">
          <img
            src="public/assets/images/intra-logo.png"
            class="w-5 h-5"
            alt="Google Logo"
          />
          <span>Sign in with Intra</span>
        </button>
        <span class="text-[#fff]">
          {" "}
          I don't have an account?{" "}
          <a href="#" class="text-[var(--color-secondary)]">
            sign up
          </a>
        </span>
      </div>
    </div>
  );
};
