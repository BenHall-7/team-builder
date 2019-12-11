import React, { useState } from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

export default function Team({team}) {
    let Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 10px;
    `;

    if (team.length > 0) {
        return (
            <Wrapper>
                {team.map(member => <TeamMember {...member} />)}
            </Wrapper>
        )
    } else {
        return null;
    }
}