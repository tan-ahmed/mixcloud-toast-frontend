import Header from "../header/Header";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="w-full">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
