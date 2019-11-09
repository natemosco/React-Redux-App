import React from 'react'
import CharacterCard from './CharacterCard'
import styled from "styled-components";
import { connect } from "react-redux";

const StyledCharacterContainer = styled.div`
    box-sizing:border-box;
    width: 100%;
    height: 90vh;
    padding: 30px 80px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;

function CharacterContainer(props) {
    return (
        <StyledCharacterContainer>
            {props.characters.map((character, index) => {
                return <CharacterCard key={index} character={character}></CharacterCard>
            })}
        </StyledCharacterContainer>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, {})(CharacterContainer)