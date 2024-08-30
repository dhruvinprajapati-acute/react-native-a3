import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../component/MealDetails";

function MealDetailScreen({route}: any): React.JSX.Element {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal?.title} </Text>
            <MealDetails
                duration={selectedMeal?.duration}
                complexity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                textStyle={styles.detailText}
            />
            <View>
                <Text>Ingredients</Text>
                {
                    selectedMeal?.ingredients.map((ingredient) => (
                        <Text style={styles.subTitle} key={ingredient}>{ingredient}</Text>
                    ))
                }
            </View>
            <View>
                <Text>Steps</Text>
                {
                    selectedMeal?.steps.map((step) => (
                        <Text style={styles.subTitle} key={step}>{step}</Text>
                    ))
                }
            </View>
        </View>
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
    subTitle:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',

    },
});

export default MealDetailScreen;
