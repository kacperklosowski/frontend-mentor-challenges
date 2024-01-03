import UserProfileBasicInfo from "./components/UserProfileBasicInfo";
import UserProfileBio from "./components/UserProfileBio";
import UserProfileStats from "./components/UserProfileStats";
import UserProfileContactInfo from "./components/UserProfileContactInfo";

const UserProfile = () => {
    return (
        <div>
            <UserProfileBasicInfo/>
            <UserProfileBio/>
            <UserProfileStats/>
            <UserProfileContactInfo/>
        </div>
    );
};

export default UserProfile;
