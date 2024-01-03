import UserProfileOverviewIdentity from "./components/UserProfileOverviewIdentity";
import UserProfileOverviewJoined from "./components/UserProfileOverviewJoined";
import UserProfileOverviewAvatar from "./components/UserProfileOverviewAvatar";

export default function UserProfileOverview() {
    return (
        <div>
            <UserProfileOverviewAvatar/>
            <UserProfileOverviewIdentity/>
            <UserProfileOverviewJoined/>
        </div>
    );
};
