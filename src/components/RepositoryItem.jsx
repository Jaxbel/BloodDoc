import React from "react";
import {View, StyleSheet} from "react-native";
import StyledText from "./StyledText.jsx";

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
            <StyledText bold>Id: {props.id}</StyledText>
            <StyledText blue>Name: {props.name}</StyledText>
            <StyledText small>Description: {props.description}</StyledText>
            <StyledText small>Language: {props.language}</StyledText>
            <StyledText small>Stars: {props.stars}</StyledText>
            <StyledText small>Last_updated: {props.last_updated}</StyledText>
            <StyledText bold>Author: {props.author}</StyledText>
        </View>
)
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 10 ,
    },
});

export default RepositoryItem;
