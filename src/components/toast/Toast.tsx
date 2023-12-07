import React, { useEffect, useCallback, useRef } from "react";
import close from "../../assets/close.svg";
import live from "../../assets/live.svg";
import blankDp from "../../assets/blank-dp.png";

import "./Toast.css";

function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return `${str.substring(0, maxLength - 3)}...`;
    }
    return str;
}

interface ToastProps {
    id: number;
    title: string;
    description?: string;
    picture: string;
    onClick: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ id, title, description = "", picture, onClick }) => {
    const dismissToast = useCallback(() => {
        onClick(id);
    }, [id, onClick]);

    useEffect(() => {
        const timer = setTimeout(() => {
            dismissToast();
        }, 3000);

        return () => clearTimeout(timer);
    }, [dismissToast]);
    const truncatedTitle = truncateString(title, 10);

    return (
        <div className="toast fade-in bg-white rounded shadow h-14 flex p-2 w-[350px] justify-between items-center mb-3">
            <div className="flex flex-grow">
                <div className="rounded h-auto w-10 mr-3">
                    <img className="rounded-full" src={picture} alt={title} loading="lazy" />
                </div>
                <div>
                    <div className="text-gray-800 text-base leading-snug">{truncatedTitle}</div>
                    {description && <div className="text-gray-500 text-sm leading-tight">{description}</div>}
                </div>
            </div>

            <div className="mx-2">
                <img src={live} alt="Live" />
            </div>
            <div className="flex items-center">
                <button type="button" className="w-5 h-5" tabIndex={0} onClick={dismissToast}>
                    <img src={close} alt="Close Icon" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
