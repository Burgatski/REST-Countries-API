import React from "react";
import { render, screen } from '../../utils/test-utils';
import user from "@testing-library/user-event";
import {Countries} from "../countries";

describe("Countries Page", () => {
    beforeEach(() => {
        render(<Countries />);
    });

    it("should renders SearchBox", () => {
        const searchbox = screen.getByRole("textbox");
        expect(searchbox).toBeInTheDocument();
    });

    it("should have value of Canada in searchbox", async () => {
        user.setup();
        const searchInput = screen.getByRole("textbox");
        await user.type(searchInput, "canada");
        expect(searchInput).toHaveValue("canada");
    });

    it("should renders dropdown correctly", () => {
        const dropdown = screen.getByRole("dropdown");
        expect(dropdown).toBeInTheDocument();
    });
});
