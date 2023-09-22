import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import { Parts } from "./pages/Parts";
import { Tools } from "./pages/Tools";
import TrackOrder from "./pages/TrackOrder";
import { Clients } from "./pages/clients";
import Suppliers from "./pages/Suppliers";
import Invoices from "./pages/invoices";
import { InvoiceDoc } from "./components/documents/invoiceDoc";
import { PDFViewer } from "@react-pdf/renderer";
import EquipmentReg from "./components/documents/EquipmentReg";
import InvoiceDocument from "./components/documents/invoiceDocument";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  ); //{ username: "user1", password: "password1" }

  return (
    <>
      <div className="text-gray-900 h-screen bg-white flex ">
        {isLoggedIn && (
          <div>
            <div className="border-r w-56 h-screen">
              <div className="h-full px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium ">
                  <li className="text-center border-b pb-10">
                    <Link to="/">
                      <img
                        src="../../public/logo.png"
                        className="h-20 mx-auto"
                        alt="icrepairs Logo"
                      />
                      <span>ICREPAIRS</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="flex items-center p-2  rounded-lg hover:bg-gray-100 group"
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Track Order
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Clients"
                      className="flex items-center p-2  rounded-lg hover:bg-gray-100 group"
                    >
                      <span className="ml-3">Clients</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/tools"
                      className="flex items-center p-2  rounded-lg hover:bg-gray-100 group"
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Equipments
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Invoices"
                      className="flex items-center p-2  rounded-lg hover:bg-gray-100 group"
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Invoices
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/parts"
                      className="flex items-center p-2  rounded-lg hover:bg-gray-100 group"
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Spare_Parts
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Suppliers"
                      className="flex items-center p-2  rounded-lg hover:bg-gray-100 group"
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Suppliers
                      </span>
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        setIsLoggedIn(null);
                        window.location.href = "/";
                        localStorage.removeItem("user");
                      }}
                      className="flex items-center p-2  rounded-lg bg-red-400 hover:bg-red-600 group"
                    >
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Log Out
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <Routes>
          {isLoggedIn ? (
            <>
              <Route
                path="/"
                element={
                  <TrackOrder
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route path="/clients" element={<Clients />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/parts" element={<Parts />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/invoices" element={<Invoices />} />
            </>
          ) : (
            <Route
              path="/"
              element={
                <TrackOrder
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          )}

          <Route
            path="/invoicedoc"
            element={
              <div className="w-full h-screen first:w-full first:h-full">
                <InvoiceDoc />
              </div>
            }
          />
          <Route
            path="/equipmentreg"
            element={
              <div>
                <PDFViewer>
                  <EquipmentReg />
                </PDFViewer>
              </div>
            }
          />
          <Route
            path="/invoicedocument"
            element={
              <div className="w-full h-screen  first:w-full first:h-full">
                <InvoiceDocument />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
