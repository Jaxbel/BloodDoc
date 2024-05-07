import React from "react";
import { Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: "#000f",
    },
    bold:{
        fontWeight: "bold",
    },
    blue:{
        color: "#09f",
    },
    big:{
        fontWeight: "bold",
        color: "#BF0C0C",
        fontSize: 40,
        textAlign: "center"
    },
    small:{
        fontSize: 15,
        color: "black",
    },
    
});

export default function StyledText ({blue, bold, big, small, children}) {
    const textStyle = [
        styles.text,
        bold && styles.bold,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
    ];

    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}
