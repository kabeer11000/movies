import React, {useCallback, useRef, useState} from "react";
import {Card} from "react-native-paper";
import {findNodeHandle, TouchableHighlight, View, StyleSheet} from "react-native";
import {Link, useLinkTo, useNavigation} from "@react-navigation/native";

export const NormalCard = ({image, item,  title, cardProps, subtitle, hasTVPreferredFocus, blockFocusRight}: { item: any, cardProps: any, image: string, title: string, subtitle: string, hasTVPreferredFocus: boolean, blockFocusRight: boolean }) => {
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
            <Card elevation={0} accessable={true} {...cardProps} style={{marginLeft: ".5rem", width: "12rem", backgroundColor: "transparent"}}>
                <Card.Cover borderRadius={5} style={{ width: "12rem", height: "20rem"}} source={{uri: image}}/>
                <Card.Title style={{
                    // display: "none",
                    whiteSpace: "nowrap",
                    padding: 0,
                    maxWidth: "12rem",
                    // left: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }} title={title}
                            subtitle={subtitle}/>
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