/// <reference types="vite-plugin-svgr/client" />
import UserProfileContactInfoUnit from "./components/UserProfileContactInfoUnit";
import IconCompany from "./assets/icon-company.svg?react";
import IconLocation from "./assets/icon-location.svg?react";
import IconWebsite from "./assets/icon-website.svg?react";
import IconTwitter from "./assets/icon-twitter.svg?react";
import {useUserContext} from "../../../../hooks/useUserContext.ts";

export default function UserProfileContactInfo() {
    const {location, twitterUsername, blog, company} = useUserContext();

    return (
        <div>
            <UserProfileContactInfoUnit label={location} Icon={IconLocation}/>
            <UserProfileContactInfoUnit label={twitterUsername} Icon={IconTwitter}/>
            <UserProfileContactInfoUnit label={blog} Icon={IconWebsite}/>
            <UserProfileContactInfoUnit label={company} Icon={IconCompany}/>
        </div>
    );
};
