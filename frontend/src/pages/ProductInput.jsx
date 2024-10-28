import React from "react";
import "./ProductInput.css";
function ProductInput() {
  return (
    <div className="mx-28 max-w-full border-red-200">
      <h1 className="text-center  mt-2">Product Details Input</h1>

      <form action="" className="max-w-sm mx-auto">
        <div className="flex  gap-1 mt-3 flex-col ">
          <label htmlFor="" className="text-sm ">
            Name
          </label>
          <input
            type="text"
            className="bg-gray-100 rounded-xl"
            placeholder="title"
            required
          />
        </div>
        <div className="flex  gap-1 mt-3 flex-col ">
          <label htmlFor="" className="text-sm ">
            Name
          </label>
          <input
            type="text"
            className="bg-gray-100 rounded-xl"
            placeholder="title"
            required
          />
        </div>

        <div className="flex  gap-1 mt-3 flex-col ">
          <label htmlFor="" className="text-sm ">
            Name
          </label>
          <input
            type="text"
            className="bg-gray-100 rounded-xl"
            placeholder="title"
            required
          />
        </div>

        
        <div className="flex  gap-1 mt-3 flex-col ">
          <label htmlFor="" className="text-sm ">
            Brand
          </label>
          <input
            type="text"
            className="bg-gray-100 rounded-xl"
            placeholder="title"
            required
          />
        </div>

        <div className="mt-3">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Body Part
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Hair</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <fieldset className="mt-3">
  <legend class="sr-only">Countries</legend>

  <div class="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
      United States
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Germany
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-3" type="radio" name="countries" value="Spain" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Spain
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-4" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      United Kingdom
    </label>
  </div>

  <div class="flex items-center">
    <input id="option-disabled" type="radio" name="countries" value="China" class="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" disabled />
    <label for="option-disabled" class="block ms-2 text-sm font-medium text-gray-300 dark:text-gray-700">
      China (disabled)
    </label>
  </div>
</fieldset>



      </form>
    </div>
  );
}

export default ProductInput;
