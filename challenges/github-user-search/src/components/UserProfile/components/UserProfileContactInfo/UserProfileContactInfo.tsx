/// <reference types="vite-plugin-svgr/client" />
import UserProfileContactInfoUnit from "./components/UserProfileContactInfoUnit";
import IconCompany from "./assets/icon-company.svg?react";
import IconLocation from "./assets/icon-location.svg?react";
import IconWebsite from "./assets/icon-website.svg?react";
import IconTwitter from "./assets/icon-twitter.svg?react";

export default function UserProfileContactInfo() {
    return (
        <div>
            <UserProfileContactInfoUnit Icon={IconLocation}/>
            <UserProfileContactInfoUnit Icon={IconTwitter}/>
            <UserProfileContactInfoUnit Icon={IconWebsite}/>
            <UserProfileContactInfoUnit Icon={IconCompany}/>
        </div>
    );
};
