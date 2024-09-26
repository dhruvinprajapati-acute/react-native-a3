import React, { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../component/MealDetails";
import SubTtile from "../component/MealDetail/SubTitle";
import List from "../component/MealDetail/List";
import IconButton from "../component/iconButton";

function MealDetailScreen({route, navigation}: any): React.JSX.Element {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPresshandler(){
        console.log('press')
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerButtonPresshandler} color="white" icon="house" />
            }
        })
    }, [navigation, headerButtonPresshandler])

    return (
        <ScrollView >
            <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal?.title} </Text>
            <MealDetails
                duration={selectedMeal?.duration}
                complexity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                textStyle={styles.detailText}
            />
            <View style={{alignItems:'center'}}>
                <View style={styles.listContainer}>
                    <SubTtile>Ingredients</SubTtile>
                    <List data={selectedMeal?.ingredients} />
                    <SubTtile>Steps</SubTtile>
                    <List data={selectedMeal?.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color:'white',
    },
    detailText:{
        color: 'white',
    },
    listContainer: {
        width: '80%'
    }
});

export default MealDetailScreen;
