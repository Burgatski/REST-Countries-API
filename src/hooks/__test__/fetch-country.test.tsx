import { renderHook, waitFor } from "@testing-library/react";
import {useFetchCountry} from "../fetch-country";

describe("fetching single country", () => {
    it("should return a country information", async () => {
        const { result } = renderHook(() => useFetchCountry("CAN"));

        await waitFor(() => {
            return !result.current.isLoading;
        });

        expect(result.current.country).toBeTruthy();
    });
});
