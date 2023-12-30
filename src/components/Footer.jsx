import React from "react";

export const Footer = () => {
  return (
    <footer class="bg-teal-50 py-8 rounded-lg ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://vegitableshop.netlify.app/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://vegitableshop.netlify.app/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Flowbite
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0 ">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-700 sm:text-center ">
          © 2023{" "}
          <a href="https://vegitableshop.netlify.app/" class="hover:underline">
            Vegitable Shop™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
