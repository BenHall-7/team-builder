import React, { useState } from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const StyledForm = styled.form`
    width: 100%;
    padding: 20px 40px;
    background: tan;
    text-align: center;

    label, input {
        display: block;
        width: 300px;
        margin: auto;
        margin-bottom: 10px;
    }
`;

export default function Form({addTeamMember}) {
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChange = event => {
        let target = event.target;
        setTeamMember({...teamMember, [target.name]: target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTeamMember(teamMember);
    }

    const newLabel = ({key, title}) => <label>
        {title}
        <input name={key}
            value={teamMember[key]}
            onChange={handleChange}/>
    </label>

    const NameLabel = newLabel({key: "name", title: "Name: "});
    const EmailLabel = newLabel({key: "email", title: "Email: "});
    const RoleLabel = newLabel({key: "role", title: "Role: "});

    return (
        <StyledForm onSubmit={handleSubmit}>
            {NameLabel}
            {EmailLabel}
            {RoleLabel}
            <button>Submit</button>
        </StyledForm>
    )
}