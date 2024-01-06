/// <reference types="vite-plugin-svgr/client" />
import SearchBarIcon from "./assets/icon-search.svg?react";
import SearchBarInput from "./components/SearchBarInput";
import SearchBarButton from "./components/SearchBarButton";

export default function SearchBar() {
    return (
        <div>
            <SearchBarIcon/>
            <SearchBarInput/>
            <SearchBarButton/>
        </div>
    );
};
