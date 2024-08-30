import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

function MealItem({id, title, imageUrl, duration, complexity, affordability}: any): React.JSX.Element {
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
            mealId: id,
         });
    }

    return(
        <View style={styles.mealItem}>
            <Pressable
                onPress={selectMealItemHandler}
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                    ]}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration} 
                        complexity={complexity} 
                        affordability={affordability} 
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed:{
        opacity: 0.5,
    },
    button:{
        flex:1,
    },
    image:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
export default MealItem;
