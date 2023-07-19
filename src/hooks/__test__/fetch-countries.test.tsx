import { renderHook, waitFor } from "@testing-library/react";
import {useFetchCountries} from "../fetch-countries";

describe("fetching countries hook", () => {
    it("should return a list of country", async () => {
        const { result } = renderHook(() => useFetchCountries());

        await waitFor(() => {
            return !result.current.isLoading;
        });

        expect(result.current.countries).toBeTruthy();
    });

    it("should return a sorted list of country", async () => {
        const { result } = renderHook(() => useFetchCountries());

        await waitFor(() => {
            return !result.current.isLoading;
        });

        const sortedList = result.current.countries.sort((a, b) =>
            a.name.official.localeCompare(b.name.official),
        );

        expect(sortedList).toEqual(sortedList);
    });
});
