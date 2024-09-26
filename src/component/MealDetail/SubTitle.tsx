import { Children } from "react";
import { StyleSheet, Text, View } from "react-native";

function SubTtile({children} : any): React.JSX.Element{
    return (
        <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    subTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e2b497'
    },
    subTitleContainer:{
        marginHorizontal:14,
        marginVertical:4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth:2,
    }
})

export default SubTtile