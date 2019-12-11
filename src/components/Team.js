import React, { useState } from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

export default function Team({team}) {
    let Wrapper = styled.div`
        padding: 0 50px;
        border; 1px dashed black;
    `;

    return (
        <Wrapper>
            {team.map(member => <TeamMember {...member} />)}
        </Wrapper>
    )
}