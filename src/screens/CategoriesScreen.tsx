import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../component/CategoryGridTile";

function renderCategoryItem(itemData: any): React.JSX.Element{
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
}

function CategoriesScreen (): React.JSX.Element{
    return(
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
