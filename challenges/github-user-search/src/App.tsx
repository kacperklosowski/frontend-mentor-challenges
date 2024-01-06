import {useState} from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import {UserData} from "./types/UserData.types.ts";
import './App.scss'
import {mockedUserData} from "./data/mockedUserData.ts";

export default function App() {
    const [userData, _] = useState<UserData>(mockedUserData);
    return (
        <div>
            <Navigation/>
            <SearchBar/>
            <UserProfile userData={userData}/>
        </div>
    )
}
