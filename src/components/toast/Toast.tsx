// Toast.tsx

import close from "../../assets/close.svg";
import live from "../../assets/live.svg";
import { truncateString } from "../../utils/utilts";
import { ToastProps } from "./shared";

interface ToastUI extends ToastProps {
    onClose: (id: number) => void;
}

const Toast = ({ id, title, picture, onClose }: ToastUI) => {
    const truncatedTitle = truncateString(title, 22);
    const toastId = `toast-${id}`;

    return (
        <div id={toastId} className="toast bg-white rounded shadow h-14 flex p-2 w-[350px] justify-between items-center mb-3">
            <div className="flex flex-grow">
                <div className="rounded h-auto w-10 mr-3">
                    <img className="rounded-full" src={picture} alt={title} loading="lazy" />
                </div>
                <div>
                    <p className="text-gray-800 text-base leading-snug">{truncatedTitle}</p>
                    <p className="text-gray-500 text-sm leading-tight">has gone live - watch now</p>
                </div>
            </div>

            <div className="mx-2">
                <img src={live} alt="Live" />
            </div>
            <div className="flex items-center">
                <button type="button" className="w-5 h-5" tabIndex={0} onClick={() => onClose(id)}>
                    <img src={close} alt="Close Icon" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
