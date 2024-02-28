import React, { useState } from 'react';

export default function CreateForm({onCreate}) {
  const [formData, setFormData] = useState({
    location: '',
    minCustomers: '',
    maxCustomers: '',
    avgCookies: '',
    hourly_sales: new Array(14).fill(0) // assuming 14 time slots
  });

  // Handle changes in form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(formData.avgCookies) < 1 || parseInt(formData.minCustomers) < 1 || parseInt(formData.maxCustomers) < 1) {
      alert('Cannot be less than 1.');
      return;
    }
    if (parseInt(formData.minCustomers) > parseInt(formData.maxCustomers)) {
      alert('Minimum customers per hour cannot be greater than maximum customers per hour.');
      return;
    }
    onCreate(formData);
  };
  
  

  return (
    <main className="my-8 mx-auto max-w-xl">
      <form onSubmit={handleSubmit} className="bg-green-200 p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Store Location"
            required
          />
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="minCustomers" className="block text-sm font-medium text-gray-700">
              Minimum Customers per Hour
            </label>
            <input
              type="number"
              name="minCustomers"
              id="minCustomers"
              value={formData.minCustomers}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="maxCustomers" className="block text-sm font-medium text-gray-700">
              Maximum Customers per Hour
            </label>
            <input
              type="number"
              name="maxCustomers"
              id="maxCustomers"
              value={formData.maxCustomers}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="avgCookies" className="block text-sm font-medium text-gray-700">
              Average Cookies per Sales . 
            </label>
            <input
              type="number"
              name="avgCookies"
              id="avgCookies"
              value={formData.avgCookies}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
