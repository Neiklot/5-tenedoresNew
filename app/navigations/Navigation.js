import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import RestaurantStack from "./RestaurantsStacks";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStacks";
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStacks';

const Tab=createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantStack}
                    options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title:"Favoritos"}}
                />
                <Tab.Screen
                    name="top-resturants"
                    component={TopRestaurantsStack}
                    options={{title:"Top 5"}}
                />
                 <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title:"Buscador"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title:"Cuenta"}}
                />
            </Tab.Navigator>
     </NavigationContainer>
    )
}