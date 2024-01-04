import UserProfileOverview from "./components/UserProfileOverview";
import UserProfileBio from "./components/UserProfileBio";
import UserProfileStats from "./components/UserProfileStats";
import UserProfileContactInfo from "./components/UserProfileContactInfo";

export default function UserProfile() {
    return (
        <div>
            <UserProfileOverview/>
            <UserProfileBio/>
            <UserProfileStats/>
            <UserProfileContactInfo/>
        </div>
    );
};
