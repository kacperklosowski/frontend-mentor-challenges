import {UserProfileContactInfoUnitProps} from "./types.ts";

export default function UserProfileContactInfoUnit({Icon, label}: UserProfileContactInfoUnitProps) {
    return (
        <div>
            <Icon/>
            {label || "Not available"}
        </div>
    );
};
