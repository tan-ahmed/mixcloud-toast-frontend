// This is a dummy header straight from tailwind docs, please ignore it. It's just here for my sanity.
const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Dummy header</span>
            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
                <div className="text-sm lg:flex-grow">
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
