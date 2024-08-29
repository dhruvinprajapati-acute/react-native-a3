import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({title, color, onPress} : any): React.JSX.Element{
    return(
        <View style={styles.gridItem}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                    ]}>
                <View style={[styles.InnerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height: 130,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed:{
        opacity: 0.5,
    },
    button:{
        flex:1,
    },
    InnerContainer:{
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CategoryGridTile;
