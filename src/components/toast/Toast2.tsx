import close from "../../assets/close.svg";
import live from "../../assets/live.svg";
import blankDp from "../../assets/blank-dp.png";

interface ToastProps {
    picture: string;
    title: string;
    isLive: boolean;
    onClose: () => void;
    description: string;
}

const Toast2 = ({ picture, title, onClose, isLive = false, description = "" }: ToastProps) => {
    return (
        <div className="bg-white rounded shadow h-14 flex p-2 w-[350px] justify-between items-center">
            <div className="flex flex-grow">
                <div className="rounded h-auto w-10 mr-3">
                    <img className="rounded-full" src={picture || blankDp} alt={title} loading="lazy" />
                </div>
                <div>
                    <div className="text-gray-800 text-base leading-snug">{title}</div>
                    {description && <div className="text-gray-500 text-sm leading-tight">{description}</div>}
                </div>
            </div>
            {isLive && (
                <div className="mx-2">
                    <img src={live} alt="Live" />
                </div>
            )}
            <div className="flex items-center">
                <button type="button" className="w-5 h-5" tabIndex={0} onClick={onClose}>
                    <img src={close} alt="Close Icon" />
                </button>
            </div>
        </div>
    );
};

export default Toast2;
