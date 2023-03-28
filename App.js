import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ProductsScreen } from "./src/screens/ProductsScreen";
import { ProductDetailScreen } from "./src/screens/ProductDetailScreen";
import { ShoppingCart } from "./src/screens/ShoppingCart";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <ProductsScreen /> */}
        {/* <ProductDetailScreen /> */}
        <ShoppingCart />

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
