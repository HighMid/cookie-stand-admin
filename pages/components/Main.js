import React, { useState } from 'react';

export default function Main() {
  const [formData, setFormData] = useState({
    location: '',
    minCustomers: '',
    maxCustomers: '',
    avgCookies: '',
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
    console.log(formData);
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
      <div className="mt-8">
        <p className="text-sm font-semibold">Report Table Coming Soon...</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold">State of formData:</p>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
