import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function DefaultLayout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
