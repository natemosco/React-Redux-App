import React from 'react'
import styled from "styled-components"
import { getCharacters } from "../actions";
import { connect } from "react-redux";

const StyledButton = styled.button`
    color: white;
    border-radius: 45px;
    height: 80px;
    width: 250px;
    margin: 5px 10px;
    font-size: 1.8rem;
    font-weight: 900;
    background: linear-gradient(#eae4e4, #040434);
    box-shadow: inset -1px -1px 20px 2px black;
`;
function Button(props) {
    return (
        <StyledButton onClick={() => { props.getCharacters() }}>{props.name}</StyledButton>
    )
}

export default connect(null, { getCharacters })(Button)