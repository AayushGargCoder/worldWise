import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import style from "./AppLayout.module.css";

function AppLayout() {
  return (
    <main className={`${style.main}`}>
      <Sidebar />
      <Map />
    </main>
  );
}

export default AppLayout;
