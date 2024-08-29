import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({title, imageUrl, duration, complexity, affordability}: any): React.JSX.Element {
    return(
        <View>
            <Pressable>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <Text>{duration}m</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
});
export default MealItem;
