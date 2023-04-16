import React from "react";

export const NavigationHighlightContext = React.createContext(false);
export const DrawerContextProvider = ({children}) => {
    const [drawer, setDrawer] = React.useState(false);
    return (
        <DrawerContext.Provider value={[drawer, setDrawer]}>
    {children}
    </DrawerContext.Provider>
);
};