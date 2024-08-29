import React from "react";
import { Pressable, Text, View } from "react-native";

function CategoryGridTile({title, color} : any): React.JSX.Element{
    return(
        <View>
            <Pressable>
                <View>
                    <Text>
                        {title}, {color}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;
