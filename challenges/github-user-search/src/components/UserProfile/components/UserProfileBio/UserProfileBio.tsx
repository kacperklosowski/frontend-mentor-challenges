import {useUserContext} from "../../../../hooks/useUserContext.ts";

export default function UserProfileBio() {
    const {bio} = useUserContext();

    return (
        <p>{bio}</p>
    );
};
