import { Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


function IconButton({onPress, icon, color}: any){
    return(
        <Pressable onPress={onPress}>
            <Ionicons name={icon} size={30} color={color}  />
        </Pressable>
    );
}

export default IconButton