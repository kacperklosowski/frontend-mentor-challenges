import UserProfileStatsUnit from "./components/UserProfileStatsUnit";
import {useUserContext} from "../../../../hooks/useUserContext.ts";

export default function UserProfileStats() {
    const {publicRepos, followers, following} = useUserContext();

    return (
        <div>
            <UserProfileStatsUnit category='Repos' amount={publicRepos}/>
            <UserProfileStatsUnit category='Followers' amount={followers}/>
            <UserProfileStatsUnit category='Following' amount={following}/>
        </div>
    );
};
