import SearchBarInput from "./components/SearchBarInput";
import SearchBarButton from "./components/SearchBarButton";
import SearchBarLogo from "./components/SearchBarLogo";

const SearchBar = () => {
    return (
        <div>
            <SearchBarLogo/>
            <SearchBarInput/>
            <SearchBarButton/>
        </div>
    );
};

export default SearchBar;
