import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/general/AppSidebar";
import Header from "@/components/general/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8">
            <SidebarProvider>
              <aside className="md:w-64">
                <AppSidebar />
              </aside>
              <div className="flex-grow p-4">
                <Header />
                {children}
              </div>
            </SidebarProvider>
          </div> 
    </div>
  )
}