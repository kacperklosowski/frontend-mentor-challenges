import {UserProfileStatsUnitProps} from "./types.ts";

export default function UserProfileStatsUnit({category, amount}: UserProfileStatsUnitProps) {
    return (
        <div>
            <p>{category}</p>
            <p>{amount}</p>
        </div>
    );
};
