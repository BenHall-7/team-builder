import React, { useState } from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

export default function Team({team}) {
    let Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 50px;
    `;

    return (
        <Wrapper>
            {team.map(member => <TeamMember {...member} />)}
        </Wrapper>
    )
}