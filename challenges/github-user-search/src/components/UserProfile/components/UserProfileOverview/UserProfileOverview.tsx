import UserProfileOverviewIdentity from "./components/UserProfileOverviewIdentity";
import UserProfileOverviewJoined from "./components/UserProfileOverviewJoined";
import UserProfileOverviewAvatar from "./components/UserProfileOverviewAvatar";

const UserProfileOverview = () => {
    return (
        <div>
            <UserProfileOverviewAvatar />
            <UserProfileOverviewIdentity />
            <UserProfileOverviewJoined />
        </div>
    );
};

export default UserProfileOverview;
