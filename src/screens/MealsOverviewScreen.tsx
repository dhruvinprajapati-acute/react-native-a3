import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../component/MealItem";

function MealsOverviewScreen({route}: any): React.JSX.Element{
    const catId = route.params.categoryId;

    const displayedMeal = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0);

    function renderMealItem(itemData: any){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return(
            <MealItem {...mealItemProps}/>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeal} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
});

export default MealsOverviewScreen;
