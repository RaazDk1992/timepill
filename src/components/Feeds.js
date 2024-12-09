import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const Feeds =()=>{

   return( <View style={style.feed_style}>
   
            <LottieView 
            autoPlay
            loop
            source={require("../../assets/json_icons/loading.json")} style={style.loading_icon}/>
    </View>);
};

const style = StyleSheet.create({
    feed_style:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    loading_icon:{
        width:100,
        height:100
    }
});
export default Feeds;