import React from 'react';
import { useState } from 'react';
import { hours } from './data';
  

export default function ReportTable({ reports, onDelete }) {
    
    if (reports.length === 0) {
      return <h2 className="text-xl text-center my-5">No Cookie Stands Available</h2>;
    }
    const calculateTotalsByHour = () => {
        return reports[0].hourly_sales.map((_, idx) => {
          return reports.reduce((total, current) => {
            return total + current.hourly_sales[idx];
          }, 0);
        });
      };
    
      const totalsByHour = reports.length > 0 ? calculateTotalsByHour() : [];
      const grandTotal = totalsByHour.reduce((acc, curr) => acc + curr, 0);
    
      return (
        <div className="mt-8">
          {reports.length === 0 ? (
            <h2>No Cookie Stands Available</h2>
          ) : (
            <table className="w-3/4 mx-auto my-4 bg-green-500">
                <thead>
                <tr className="bg-green-600">
                    <th className="border border-green-700">Location</th>
                    {hours.map((hour, index) => (
                    <th key={index} className="border border-green-700">{hour}</th>
                    ))}
                    <th className="border border-green-700">Totals</th>
                </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={index} className="odd:bg-green-200 even:bg-green-100">
                        <td className="border border-green-700">{report.location}</td>
                        {report.hourly_sales.map((sale, index) => (
                            <td key={index} className="border border-green-700">{sale}</td>
                        ))}
                        <td className="border border-green-700">{report.hourly_sales.reduce((acc, curr) => acc + curr, 0)}</td>
                        <td className="border border-green-700">
                            <button onClick={() => onDelete(index)} className="bg-transparent border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
              <tfoot>
                <tr className="bg-green-600">
                  <th className="border border-green-700">Totals</th>
                  {totalsByHour.map((total, index) => (
                    <td key={index} className="border border-green-700">{total}</td>
                  ))}
                  <td className="border border-green-700">{grandTotal}</td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      );
    }
  