/* eslint-disable react/jsx-props-no-spreading */

import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./Toast";

test("Toast renders correctly", () => {
    const onClose = jest.fn();
    const toastData = { id: 1, title: "Test Toast", picture: "test.png" };

    render(<Toast {...toastData} onClose={onClose} />);

    expect(screen.getByAltText("Test Toast")).toBeInTheDocument();
    expect(screen.getByText("has gone live - watch now")).toBeInTheDocument();
});

test("Toast calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const toastData = { id: 1, title: "Test Toast", picture: "test.png" };

    render(<Toast {...toastData} onClose={onClose} />);

    fireEvent.click(screen.getByAltText("Close Icon"));

    expect(onClose).toHaveBeenCalledWith(1);
});
