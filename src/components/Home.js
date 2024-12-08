import { StyleSheet, View } from "react-native";
import CreatePost from "./CreatePost";

const Home=()=>{



    return (<View style={style.container}>
            <CreatePost style={style.create_post}/>
            
    </View>)

};

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    create_post:{
      alignSelf:'flex-start'
    },

    feed:{
        flex:1
    }
});

export default Home;