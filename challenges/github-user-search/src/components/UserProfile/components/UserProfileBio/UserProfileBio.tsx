import {UserProfileBioProps} from "./types.ts";

export default function UserProfileBio({bio}: UserProfileBioProps) {
    return (
        <p>{bio || 'This profile has no bio'}</p>
    );
};
