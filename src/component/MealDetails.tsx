import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MealDetails({duration, complexity, affordability}: any): React.JSX.Element{
    return(
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12,
    },
});

export default MealDetails;
