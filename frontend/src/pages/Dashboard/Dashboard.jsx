import Sidebar from "../../components/Sidebar";
import DashboardCards from "../../components/DashboardCards";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard 🚀
        </h1>

        <DashboardCards />
      </div>
    </div>
  );
}