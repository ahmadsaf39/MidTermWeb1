import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">

        <h1 className="text-2xl font-bold mb-6">
          My App
        </h1>

        <nav className="flex flex-col gap-3">

          <Link
            to="/dashboard"
            className="hover:text-blue-500"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-500"
          >
            Profile
          </Link>

          <Link
            to="/settings"
            className="hover:text-blue-500"
          >
            Settings
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <h2 className="text-xl font-semibold">
            Welcome
          </h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;