import UserProfileBasicNames from "./components/UserProfileBasicNames";
import UserProfileBasicJoined from "./components/UserProfileBasicJoined";
import UserProfileBasicAvatar from "./components/UserProfileBasicAvatar";

const UserProfileBasicInfo = () => {
    return (
        <div>
            <UserProfileBasicAvatar />
            <UserProfileBasicNames />
            <UserProfileBasicJoined />
        </div>
    );
};

export default UserProfileBasicInfo;
