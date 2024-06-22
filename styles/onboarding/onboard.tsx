import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    firstContainer: {
        alignItems:'center',
        margin:50,
    },
    logo:{
        width:wp('50%'),
        height:hp('20%'),
        resizeMode:'contain',
        
    }
}
)