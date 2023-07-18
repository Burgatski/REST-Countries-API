import {useCountriesContext} from "../../context/countries-context"
import {Icon, Input, Wrapper} from "./style";

export const SearchBox = () => {
    const { search, setSearch } = useCountriesContext();
    return (
        <Wrapper autoComplete="off" onSubmit={e => e.preventDefault()}>
            <Icon />
            <Input
                placeholder="Search for a country…"
                aria-label="Search for a country…"
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Wrapper>
    );
}