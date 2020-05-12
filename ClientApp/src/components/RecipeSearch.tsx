import React from 'react';
import "../styles/AppStyles.css";

interface Props {
    value: string;
    onChange: (str: string) => void;
}

const RecipeSearch = (props: Props) => {
    return (
        <input className="search-input" type="text" placeholder="Search a raw ingredient or ingredient" value={props.value} onChange={e => props.onChange(e.target.value)} />
    )
}

export default RecipeSearch
