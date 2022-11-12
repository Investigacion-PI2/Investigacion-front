import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CustomAppShell } from "./layout/appshell/CustomAppShell";
import {Login} from "./layout/auth/Login";
import { Landing } from "./layout/landing/Landing";
import { RegisterResearchGroup } from "./layout/research_groups/RegisterResearchGroup";
import {DetailedGroup} from "./layout/detail-view/DetailedGroup";



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
          <Route path="registerResearchGroup" element={<RegisterResearchGroup/>}></Route>
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
        <Route path="/detail" element={<DetailedGroup/>}/>
      </Routes>
    </BrowserRouter>
  )
}