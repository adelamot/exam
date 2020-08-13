import React from "react";
import "./search.css";
import { InputBase } from '@material-ui/core';
import {searchByFaculty, searchByYear} from "../../services";

const SearchBox = (props) => {

    const [state, setState] = React.useState({
        search: props.search,
        click: false
    });

    const changeHandler = (event) => {
        let val=event.target.value;
        setState({search: val});
        props.searchHandler(event.target.value);
    }

    const clickHandler = () => {

        if(state.click === true) {
            setState({click: false});
            props.cancelSearch();
        }
        else {
            let searchValue = state.search.trim();
            if(searchValue && parseInt(searchValue)) {
                setState({click: true});
                searchByYear(props.handleSearchCallback, searchValue);
            }
            else if(searchValue && !parseInt(searchValue)) {
                setState({click: true});
                searchByFaculty(props.handleSearchCallback, searchValue);
            }
        }
    }
    return(
        <div className="search-box">
            <button id="search-button" onClick={clickHandler}><i className={state.click ? "fas fa-times": "fas fa-search"}></i></button>
            <InputBase id="search-input" type="search" value={state.search||''} name="search" placeholder="Search by faculty/year" onChange={changeHandler}/>
        </div>
    );
}

export default SearchBox;