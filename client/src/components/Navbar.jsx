function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-orange-500">
          StreetVendor
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-orange-500 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition">
            Vendors
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition">
            Categories
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition">
            Contact
          </li>
        </ul>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;