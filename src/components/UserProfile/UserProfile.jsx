const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {/* Display other user-specific information here */}
        </div>
    );
};

export default UserProfile;