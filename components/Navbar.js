export default function Navbar({ showAboutButton = true }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white px-32 lg:px-64 py-4 border-b-4 border-primary">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a className="text-white font-semibold text-xl tracking-tight" href="/">
          <img src="/alliance-logo.png" alt="Alliance Logo" className="h-8 mr-4" />
        </a>
      </div>
      {showAboutButton && (
        <div className="flex">
          <a className="inline-block text-sm px-6 py-4 leading-none border rounded text-primary border-primary hover:text-white hover:bg-primary mt-4 lg:mt-0">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};
