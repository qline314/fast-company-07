import React from "react";
import Users from "../components/users";
import User from "../components/user";
import PropTypes from "prop-types";

const UsersPage = ({ match }) => {
    const userId = match.params.userId;
    return (
        <>
            { userId ? <User userId={userId} /> : <Users /> }

        </>
    );
};

UsersPage.propTypes = {
    match: PropTypes.object
};

export default UsersPage;
