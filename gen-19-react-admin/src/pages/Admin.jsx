import React from "react";
import { Sidebar } from "../components/admin/sidebar";
import AdminHeader from "../components/admin/AdminHeader";
import Table from "../components/admin/Table";

export default function Admin() {
  return (
    <div>
      <div className="flex">
        <div className="bg-pink-50">
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <AdminHeader />
          <Table />
        </div>
      </div>
    </div>
  );
}
