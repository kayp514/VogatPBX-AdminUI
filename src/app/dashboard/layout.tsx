import Sidebar from "../ui/sidebar";
import { Breadcrumbtop } from "../ui/breadcrumb";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto bg-gray-50">
      <div className="p-2 sm:p-6 md:p-4 mt-14">
          <Breadcrumbtop />
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}