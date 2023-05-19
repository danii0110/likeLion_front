import React from "react";

export default function Profile({user}) {
    const {email, password, userName} = user || {};
    return (
        <>
            <h1>Profile</h1>
            <dt>Email</dt>
            <dd>{email}</dd>
            <dt>Password</dt>
            <dd>{password}</dd>
            <dt>UserName</dt>
            <dd>{userName}</dd>
        </>
    );
}