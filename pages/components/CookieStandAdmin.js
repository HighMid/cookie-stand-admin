import Head from "next/head";
import Header from "./Header";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Footer from "./Footer";
import { useState } from "react";

export default function CookieStandAdmin() {

    const [reports, setReports] = useState([]);

    const addReport = (formData) => {
        const newReport = {
          ...formData,
          hourly_sales: generateHourlySales(
            Number(formData.minCustomers),
            Number(formData.maxCustomers),
            Number(formData.avgCookies)
          ),
        };
        setReports([...reports, newReport]);
      };

    const deleteReport = (index) => {
        const updatedReports = reports.slice(); // Create a copy of the reports array
        updatedReports.splice(index, 1); // Remove the report at the specified index
        setReports(updatedReports); // Update the state
    };

    return (
      <div>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <Header />
        <CreateForm onCreate={addReport} />
        <ReportTable reports={reports} onDelete={deleteReport} />
        <Footer locationCount={reports.length} />
      </div>
    );
  }

  function generateHourlySales(minCustomers, maxCustomers, avgCookies) {
    const hourlySales = [];
    for (let hour = 0; hour < 14; hour++) {
      const customers = Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
      const sales = Math.round(customers * avgCookies);
      hourlySales.push(sales);
    }
    return hourlySales;
  }
  