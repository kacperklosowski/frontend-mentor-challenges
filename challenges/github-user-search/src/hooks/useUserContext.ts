import {useContext} from "react";
import {UserContext} from "../providers/UserContextProvider.tsx";

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }

    return context;
}
