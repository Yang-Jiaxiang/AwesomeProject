//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { WebView } from "react-native-webview";
import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    useSafeAreaInsets,
    SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
    //const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#222342" }}>
                <View
                    style={{
                        flexDirection: "row",
                        height: "100%",
                    }}
                >
                    <WebView
                        source={{ uri: "https://iclass.ntunhs.edu.tw/" }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
