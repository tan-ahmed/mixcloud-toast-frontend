// This is a dummy header straight from tailwind docs, please ignore it. It's just here for my sanity.
const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6 text-white">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <span className="font-semibold text-xl text-red">Dummy header</span>
            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
                <div className="text-sm lg:flex-grow">
                    <button type="button" className="text-white block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Sample link
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
