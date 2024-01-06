import UserProfileStatsUnit from "./components/UserProfileStatsUnit";
import {UserProfileStatsProps} from "./types.ts";

export default function UserProfileStats({publicRepos, followers, following}: UserProfileStatsProps) {
    return (
        <div>
            <UserProfileStatsUnit category='Repos' amount={publicRepos}/>
            <UserProfileStatsUnit category='Followers' amount={followers}/>
            <UserProfileStatsUnit category='Following' amount={following}/>
        </div>
    );
};
