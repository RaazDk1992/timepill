import { StyleSheet, View } from "react-native";
import CreatePost from "./CreatePost";
import Feeds from "./Feeds";

const Home = () => {
  return (
    <View style={styles.container}>
      <CreatePost/>
     <View style={styles.feeds}>
        <Feeds/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full-screen layout
    flexDirection: "column", // Stack children vertically
  },
  feeds: {
    flex: 4, 
  },
});

export default Home;
