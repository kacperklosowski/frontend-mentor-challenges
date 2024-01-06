import {UserProfileOverviewProps} from "./types.ts";

export default function UserProfileOverview({name, createdAt, login, avatarUrl}: UserProfileOverviewProps) {
    return (
        <div>
            <p>{avatarUrl}</p>
            <p>{name}</p>
            <p>{login}</p>
            <p>{createdAt}</p>
        </div>
    );
};
