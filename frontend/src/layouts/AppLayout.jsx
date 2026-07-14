import AppNavbar from "../components/layout/AppNavbar";

function AppLayout({ children }) {
  return (
    <>
      <AppNavbar />

      <main className="min-h-screen bg-slate-50">{children}</main>
    </>
  );
}

export default AppLayout;
