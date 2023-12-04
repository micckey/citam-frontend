import { Route, Routes } from "react-router-dom";
import DashBoard from "./views/DashBoard";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Pickups from "./views/Pickups";
import DefaultLayout from "./views/DefaultLayout";
import Events from "./views/Events";
import SignOut from "./views/SignOut";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pickups" element={<Pickups />} />
        <Route path="/events" element={<Events />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signout" element={<SignOut />} />
    </Routes>
  );
}

export default App;
