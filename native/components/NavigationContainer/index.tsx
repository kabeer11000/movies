import {createContext, useState} from "react";
import {ScrollView} from "react-native";

const NavigationContainer = ({ScrollViewProps, children,onChange}) => {
    const [index, setIndex] = useState(0);
    return (
        <ScrollView {...ScrollViewProps}>{children}</ScrollView>
        )
}
const el = () => {
    const [index] =
    return (
        <div>{}</div>
    )
}
const Main = () => {
    return (
        <div><NavigationContainer>

        </NavigationContainer></div>
    )
}