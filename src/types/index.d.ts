interface ChildrenProp {
    children: React.ReactNode;
}

interface Countries {
    cca3: string;
    flags: {
        [key: string]: string;
    };
    alt: string;
    name: {
        [key: string]: string;
    };
    population: number;
    region: string;
    capital: string;
}

interface CountriesState {
    countries: Countries[];
    isLoading: boolean;
    error: string;
}

interface Country extends Countries {
    subregion: string;
    tld: string[];
    alpha3Code: any;
    currencies: {
        [key: string]: {
            name: string;
        };
    };
    languages: {
        [key: string]: {
            [key: string]: string;
        };
    };
    borders: string[];
}

interface CountryState {
    country: Country[];
    isLoading: boolean;
    error: string;
}

interface FormState {
    search: string;
    select: string;
}

interface CountriesContextType extends CountriesState, FormState {
    setSearch: (search: string) => void;
    setSelect: (select: string) => void;
}