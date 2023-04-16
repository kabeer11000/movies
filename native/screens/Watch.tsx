import {View} from "react-native";
import {Text} from "react-native-paper";
import {useRoute} from "@react-navigation/native";

export const Watch = ({}) => {
    const route = useRoute();
    return (
        <View><Text>Appbar, {route.params.movie.title}</Text></View>
    )
}