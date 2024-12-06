import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Divider } from "react-native-paper";
import logo from './../../assets/images/logox.png';
import { useForm } from "react-hook-form";
import TextField from "./inputs/TextField";
import GlobalStyles from "../../assets/styles/GlobalStyles";

function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo_image} />
      <Card style={styles.login_card}>
        <View style={styles.card_title_container}>
          <Card.Title title="Login" titleStyle={styles.card_title} />
        </View>
        <Divider />
        <Card.Content>
          <TextField
            control={control}
            name="username"
            rules={{ required: '*Username is required!!' }}
            placeholder="@username"
            error={errors.username}
          />

          <TextField
            control={control}
            name="password"
            rules={{ required: '*password is required!!' }}
            placeholder="password"
            error={errors.password}
          />

          <View >
            <Button 
              mode="contained" 
              onPress={handleSubmit(onSubmit)}
              style={styles.button_wrapper}
            >
              Login
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  logo_image: {
    width: '30%',
    height: '20%',
  },
  login_card: {
    direction: 'col',
    width: '80%',
  },
  card_title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  card_title_container: {
    backgroundColor: GlobalStyles.primary_color,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  button_wrapper: {
    borderRadius: 5,
    overflow: 'hidden', // Ensures the button respects the border radius
    marginTop: 20, // Optional spacing
    backgroundColor: GlobalStyles.primary_color,
  },
});

export default Login;
