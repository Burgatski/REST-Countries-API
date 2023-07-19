import React, {useState, useEffect, useRef, useCallback} from "react"
import { REGIONS } from './constants'
import { useCountriesContext } from "../../context/countries-context"
import {Icon, Wrapper, Header, Options, Option, Label} from "./style"

export const Dropdown: React.FC = () => {
    const { select, setSelect } = useCountriesContext()
    const [hideSelect, setHideSelect] = useState(false)
    const selectRef = useRef<HTMLDivElement | null>(null)

    const toggleSelect = useCallback(() => {
        setHideSelect((prevHideSelect) => !prevHideSelect)
    }, []);

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (
                selectRef.current !== null &&
                !selectRef.current.contains(e.target as HTMLElement)
            ) {
                toggleSelect();
            }
        };

        if (hideSelect) {
            window.addEventListener('click', outsideClick)
        }
        return () => {
            window.removeEventListener('click', outsideClick)
        };
    }, [hideSelect, toggleSelect])


    return (
        <Wrapper ref={selectRef}>
            <Header onClick={toggleSelect}>
                <Label>{select ? select : 'Filter by Region'}</Label>
                <Icon />
            </Header>
            {hideSelect && (
                <Options>
                    {REGIONS.map(({ value, label }) => (
                        <Option
                            key={label}
                            value={value}
                            onClick={e => {
                                setSelect((e.target as HTMLInputElement).value)
                                toggleSelect()
                            }}
                        >
                            {label}
                        </Option>
                    ))}
                </Options>
            )}
        </Wrapper>
    );
}