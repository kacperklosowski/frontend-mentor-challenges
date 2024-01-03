import UserProfileBasic from "./components/UserProfileBasic";
import UserProfileBio from "./components/UserProfileBio";
import UserProfileStats from "./components/UserProfileStats";
import UserProfileContact from "./components/UserProfileContact";

const UserProfile = () => {
    return (
        <div>
            <UserProfileBasic/>
            <UserProfileBio/>
            <UserProfileStats/>
            <UserProfileContact/>
        </div>
    );
};

export default UserProfile;
