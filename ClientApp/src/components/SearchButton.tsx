import React from 'react'

interface Props {
    isSearching: boolean;
    toggleSearch: () => void;
}

const SearchButton = (props: Props) => {
    if (props.isSearching) {
        return <DisabledButton />
    }
    else {
        return <NormalButton toggleSearch={props.toggleSearch} />
    }
}

const DisabledButton = () => {
    return (
        <button className="btn btn-primary" disabled>Search</button>
    )
}

interface NormalButtonProps {
    toggleSearch: () => void;
}

const NormalButton = (props: NormalButtonProps) => {
    return (
        <button className="btn btn-primary" onClick={() => props.toggleSearch()}>Search</button>
    )
}

export default SearchButton
