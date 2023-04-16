import {ScrollView, StyleSheet, View} from "react-native";
import {Text, TouchableRipple} from "react-native-paper";
import {IYTSRawMovie} from "../types";
import {LargeCard} from "./Card/Large";
import {NormalCard} from "./Card/Normal";
import {useNavigation} from "@react-navigation/native";

const rowNumber = 0;
export const Row = ({
                        title,
                        subtitle,
                        items,
                        onItemClick,
                        largeRow
                    }: { title: string, subtitle: string, items: Array<IYTSRawMovie>, onItemClick: Function, largeRow: boolean }) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{
                color: "white"
            }} variant="headingLarge">{title}</Text>
            <ScrollView horizontal={true} bounces={true} contentInsetAdjustmentBehavior="automatic">
                {items.map((item, index) => (
                    <TouchableRipple key={index} onPress={() => navigation.navigate("Watch", {
                        movie: item
                    })}><LargeCard cardProps={{
                        style: {
                            width: "100%"
                        },
                    }} hasTVPreferredFocus={rowNumber === 0 && index === 0}
                               blockFocusRight={index === items.length - 1} item={item} image={`${largeRow ? item.medium_cover_image : item.background_image_original}`}
                                     title={item.title} subtitle={item.summary}/></TouchableRipple>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    horizontalScroll: {},
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    col6: {
        width: "50%",
    }
})
export default Row;