import React, { useState } from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const StyledForm = styled.form`
    label, input {
        display: block;
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