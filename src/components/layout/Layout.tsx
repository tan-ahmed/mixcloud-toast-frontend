// layout.tsx
import Header from "../header/Header";
import ToastContainer from "../toast/ToastContainer";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="w-full">
            <Header />
            {children}
            <ToastContainer />
        </div>
    );
};

export default Layout;
