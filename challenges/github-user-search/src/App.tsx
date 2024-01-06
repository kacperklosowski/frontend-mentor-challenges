import {useState} from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import {UserData} from "./types/UserData.types.ts";
import './App.scss'

import mockedUserProfile from "./data/mockedUserProfile.ts";

const {
    twitter_username,
    following,
    created_at,
    company,
    name,
    bio,
    public_repos,
    followers,
    avatar_url,
    location,
    blog,
    login
} = mockedUserProfile;

const initialUserData: UserData = {
    avatarUrl: avatar_url,
    bio: bio,
    blog: blog,
    company: company,
    createdAt: created_at,
    followers: followers,
    following: following,
    location: location,
    login: login,
    name: name,
    publicRepos: public_repos,
    twitterUsername: twitter_username
};

export default function App() {
    const [userData, _] = useState<UserData>(initialUserData);
    return (
        <div>
            <Navigation/>
            <SearchBar/>
            <UserProfile userData={userData}/>
        </div>
    )
}
