import SearchBarInput from "./components/SearchBarInput";
import SearchBarButton from "./components/SearchBarButton";
import SearchBarLogo from "./components/SearchBarLogo";

export default function SearchBar() {
    return (
        <div>
            <SearchBarLogo/>
            <SearchBarInput/>
            <SearchBarButton/>
        </div>
    );
};
