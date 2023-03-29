import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ProductsScreen } from "./src/screens/ProductsScreen";
import { ProductDetailScreen } from "./src/screens/ProductDetailScreen";
import { ShoppingCart } from "./src/screens/ShoppingCart";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Navigation />

          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
