import close from "../../assets/close.svg";
import live from "../../assets/live.svg";
import blankDp from "../../assets/blank-dp.png";

interface ToastProps {
    picture: string;
    username: string;
    isLive: boolean;
    onClose: () => void;
    message?: string;
}

const Toast2 = ({ picture, username, onClose, isLive, message }: ToastProps) => {
    return (
        <div className="bg-white rounded shadow h-14 flex p-2 w-[350px] justify-between items-center">
            <div className="flex flex-grow">
                <div className="rounded h-auto w-10 mr-3">
                    <img className="rounded-full" src={picture || blankDp} alt="Profile Picture" loading="lazy" />
                </div>
                <div>
                    <div className="text-gray-800 text-base leading-snug">{username}</div>
                    {message && <div className="text-gray-500 text-sm leading-tight">{message}</div>}
                </div>
            </div>
            {isLive && (
                <div className="mx-2">
                    <img src={live} />
                </div>
            )}
            <div className="flex items-center">
                <button className="w-5 h-5" tabIndex={0} onClick={onClose}>
                    <img src={close} alt="Close Icon" />
                </button>
            </div>
        </div>
    );
};

export default Toast2;
