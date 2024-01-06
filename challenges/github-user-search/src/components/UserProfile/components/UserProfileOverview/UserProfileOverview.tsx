import {useUserContext} from "../../../../hooks/useUserContext.ts";

export default function UserProfileOverview() {
    const {avatarUrl, name, login, createdAt} = useUserContext();

    return (
        <div>
            <p>{avatarUrl}</p>
            <p>{name}</p>
            <p>{login}</p>
            <p>{createdAt}</p>
        </div>
    );
};
