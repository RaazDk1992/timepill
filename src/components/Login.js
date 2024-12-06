import { Image, StyleSheet, Text, View } from "react-native";
import { Card, Divider } from "react-native-paper";
import logo from './../../assets/images/app-logo-slogan.png';

function Login(){


    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo_image}/>
           <Card style={styles.login_card}>
               <View style={styles.card_title_container}>
               <Card.Title title="Login" titleStyle={styles.card_title}/>
               </View>
                <Divider/>
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
           </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        margin:5,
       
    },
    logo_image:{
        width:'30%',
        height:'20%',
    },
    login_card:{
        direction:'col',
        width:'80%',
        
    },
    card_title: {
        textAlign: 'center', // Centers the title text horizontally
        fontWeight: 'bold',  // Makes the text bold
        fontSize: 20, 
        color:'white'      
       
    },
    card_title_container:{
        backgroundColor:'#cf3158',
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    }
});
export default Login;