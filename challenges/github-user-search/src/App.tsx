import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import {UserContextProvider} from "./providers/UserContextProvider.tsx";
import './App.scss'

export default function App() {
    return (
        <div>
            <Navigation/>
            <SearchBar/>
            <UserContextProvider>
                <UserProfile/>
            </UserContextProvider>
        </div>
    )
}
