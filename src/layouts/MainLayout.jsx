// react router dom import
import { Outlet } from "react-router-dom";

// components import
import { Navbar } from "../components";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="my-container">
        <Outlet />
      </main>
    </>
  );
}
