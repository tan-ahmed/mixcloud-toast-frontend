interface ButtonProps {
    children: React.ReactNode;
    handleClick: () => void;
}

const Button = ({ children, handleClick }: ButtonProps) => (
    <button className="bg-blue-50 p-2 m-2" onClick={handleClick}>
        {children}
    </button>
);

export default Button;
