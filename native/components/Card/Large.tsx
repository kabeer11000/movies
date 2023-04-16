import React, {useCallback, useRef, useState} from "react";
import {Card, Text} from "react-native-paper";
import {findNodeHandle, TouchableHighlight, View, StyleSheet} from "react-native";
import {Link, useLinkTo, useNavigation} from "@react-navigation/native";

export const LargeCard = ({image, item,  title, cardProps, subtitle, hasTVPreferredFocus, blockFocusRight}: { item: any, cardProps: any, image: string, title: string, subtitle: string, hasTVPreferredFocus: boolean, blockFocusRight: boolean }) => {
    const [focus, setFocus] = useState(false);

    const onFocus = useCallback(() => {
        setFocus(true);
    }, []);

    const onBlur = useCallback(() => {
        setFocus(false);
    }, []);

    const touchableHighlightRef = useRef(null);
    const onRef = useCallback((ref) => {
        if (ref) {
            touchableHighlightRef.current = ref;
        }
    }, []);
    return (
        // <TouchableHighlight
        //     onFocus={onFocus}
        //     onBlur={onBlur}
        //     hasTVPreferredFocus={hasTVPreferredFocus}
        //     style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
        //     ref={onRef}
        //     nextFocusRight={
        //         blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
        //     }>
            <Card {...cardProps}>
                <Card.Cover style={{filter: "brightness(70%)", width: "20rem", height: "10rem"}} source={{uri: image}}/>
                <Card.Title style={{
                    // display: "none",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }} title={<Text style={{color: "white",}}>{title}</Text>}
                            subtitle={<Text style={{color: "white",}}>{subtitle}</Text>}/>
            </Card>
        // </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        borderColor: 'transparent',
        borderWidth: 4,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    wrapperFocused: {
        borderColor: '#714add',
    },
})