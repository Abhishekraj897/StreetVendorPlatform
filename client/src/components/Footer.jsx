import { Link } from "react-router-dom";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
} from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>

                        <h2 className="text-3xl font-bold text-orange-500">
                            StreetVendor
                        </h2>

                        <p className="mt-4 text-gray-600 leading-7">
                            Discover the best local street food with
                            AI-powered recommendations and support your
                            favorite vendors.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/add-vendor"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    Add Vendor
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/favorites"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    Favorites
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/ai-assistant"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    AI Assistant
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Connect */}
                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Connect With Me
                        </h3>

                        <div className="space-y-4">

                            <a
                                href="https://github.com/Abhishekraj897"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition"
                            >
                                <FiGithub />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/abhishek-raj-a79017309/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition"
                            >
                                <FiLinkedin />
                                LinkedIn
                            </a>

                            <a
                                href="mailto:hixabhishek@gmail.com"
                                className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition"
                            >
                                <FiMail />
                                Email
                            </a>

                        </div>

                    </div>

                    {/* Project */}
                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Project
                        </h3>

                        <div className="space-y-4 text-gray-600">

                            <div className="flex items-center gap-3">
                                <FiMapPin />
                                Patna, Bihar
                            </div>

                            <p>
                                MERN Stack + AI + Google Maps +
                                MongoDB Atlas + Cloudinary
                            </p>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-center md:text-left">
                        © 2026 StreetVendor. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-center">
                        Built with ❤️ using MERN Stack
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;