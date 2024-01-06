import {createContext} from "react";
import type {ReactNode} from "react";
import mockedUserProfile from "../data/mockedUserProfile.ts";

type UserContextValue = {
    name: string | null;
    login: string;
    createdAt: string;
    avatarUrl: string;
    location: string | null;
    twitterUsername: string | null;
    company: string | null;
    blog: string | null;
    bio: string | null;
    publicRepos: number;
    followers: number;
    following: number;
};

type Props = {
    children: ReactNode;
};

export const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserContextProvider = ({children}: Props) => {
    const {
        name,
        login,
        created_at: createdAt,
        avatar_url: avatarUrl,
        location,
        twitter_username: twitterUsername,
        company,
        blog,
        bio,
        public_repos: publicRepos,
        followers,
        following
    } = mockedUserProfile;

    const contextValue = {
        name,
        login,
        createdAt,
        avatarUrl,
        location,
        twitterUsername,
        company,
        blog,
        bio,
        publicRepos,
        followers,
        following
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
