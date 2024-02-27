import React from "react";
import {
  BarChart,
  Wallet,
  Wrench,
  Package,
  Users,
  BadgeHelp,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-pink-800 px-5 py-8">
      <Link to="/">
        <img
          src="https://notebooktherapy.com/cdn/shop/files/notebook-therapy_5c35a485-856a-4245-9bb4-ff74a75bbf44.png?v=1649853296"
          className="bg-white p-3 rounded-lg w-5/6 hover:scale-95"
        />
      </Link>

      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              analytics
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Sales</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Package className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Catalog</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Customers</span>
            </a>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              Admin
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BadgeHelp className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Help</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <LogOut className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Log Out</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
