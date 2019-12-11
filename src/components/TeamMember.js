import React, { useState } from 'react';
import styled from 'styled-components';

export default function TeamMember({name, email, role}) {
    let Wrapper = styled.div`
        width: 200px;
        padding: 20px;
        margin: 10px 10px;
        background: orange;
    `;

    return (
        <Wrapper>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{role}</p>
        </Wrapper>
    )
}