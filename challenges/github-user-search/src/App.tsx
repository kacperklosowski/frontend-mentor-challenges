import './App.scss'
import mockedUserProfile from "./data/mockedUserProfile.ts";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

export default function App() {
    console.log(mockedUserProfile)
    return (
        <div>
            <Navigation/>
            <SearchBar/>
            <UserProfile/>
        </div>
    )
}
