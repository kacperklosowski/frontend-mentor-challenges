import UserProfileOverview from "./components/UserProfileOverview";
import UserProfileBio from "./components/UserProfileBio";
import UserProfileStats from "./components/UserProfileStats";
import UserProfileContactInfo from "./components/UserProfileContactInfo";

const UserProfile = () => {
    return (
        <div>
            <UserProfileOverview/>
            <UserProfileBio/>
            <UserProfileStats/>
            <UserProfileContactInfo/>
        </div>
    );
};

export default UserProfile;
