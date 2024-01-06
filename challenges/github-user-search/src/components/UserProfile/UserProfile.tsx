import UserProfileOverview from "./components/UserProfileOverview";
import UserProfileBio from "./components/UserProfileBio";
import UserProfileStats from "./components/UserProfileStats";
import UserProfileContactInfo from "./components/UserProfileContactInfo";
import {UserProfileProps} from "./types.ts";

export default function UserProfile({userData}: UserProfileProps) {
    const {
        avatarUrl,
        name,
        login,
        createdAt,
        blog,
        bio,
        followers,
        following,
        company,
        twitterUsername,
        publicRepos,
        location
    } = userData;
    return (
        <div>
            <UserProfileOverview
                avatarUrl={avatarUrl}
                name={name}
                login={login}
                createdAt={createdAt}
            />
            <UserProfileBio
                bio={bio}
            />
            <UserProfileStats
                publicRepos={publicRepos}
                followers={followers}
                following={following}
            />
            <UserProfileContactInfo
                blog={blog}
                company={company}
                twitterUsername={twitterUsername}
                location={location}
            />
        </div>
    );
};
