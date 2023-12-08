/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToastContainer from "./ToastContainer";
import { ToastProps } from "./shared";

test("ToastContainer renders with no toasts", () => {
    const allToasts: ToastProps[] = [];
    const setAllToasts = jest.fn();

    render(<ToastContainer allToasts={allToasts} setAllToasts={setAllToasts} />);

    expect(screen.queryByTestId("toast-container")).toBeNull();
});

test("ToastContainer renders with toasts", async () => {
    const allToasts = [{ id: 1, title: "Test Toast", picture: "test.png" }];
    const setAllToasts = jest.fn();

    render(<ToastContainer allToasts={allToasts} setAllToasts={setAllToasts} />);

    expect(screen.getByTestId("toast-container")).toBeInTheDocument();
    expect(screen.getByAltText("Test Toast")).toBeInTheDocument();

    // Wait for animation to complete
    await act(async () => {
        jest.runAllTimers();
    });

    expect(setAllToasts).toHaveBeenCalledWith([]);
});
