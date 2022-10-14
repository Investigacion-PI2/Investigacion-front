import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CustomAppShell } from "./layout/appshell/CustomAppShell";
import {Login} from "./layout/auth/Login";
import { Landing } from "./layout/landing/Landing";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/app" element={<CustomAppShell />}>
          <Route path="" element={<div>START PAGE</div>} />
          <Route path="all" element={<div>ALL GROUPS</div>} />
          <Route path="mygroup" element={<div>MY GROUPS</div>} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}