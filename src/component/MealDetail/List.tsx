import { StyleSheet, Text, View } from "react-native"


function List({data}: any):React.JSX.Element{
   return data?.map((dataItem: any) => (
        <View key={dataItem} style={styles.listItem}>
            <Text style={styles.itemText}>{dataItem}</Text>
        </View>
        
    ));
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius:10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText:{
        textAlign: 'center',
        color: '#351401'
    }
})

export default List