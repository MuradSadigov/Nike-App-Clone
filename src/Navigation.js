import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { ProductsScreen } from "./screens/ProductsScreen";
import { ShoppingCart } from "./screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";
import EmptyCartScreen from "./screens/EmptyCartScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      initialRouteName="Products"
    >
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{ flexDirection: "row" }}
            >
              <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                {numberOfItems}
              </Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="Product Details" component={ProductDetailScreen} />
      <Stack.Screen
        name="Cart"
        component={numberOfItems <= 0 ? EmptyCartScreen : ShoppingCart}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
