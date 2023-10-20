import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
	const [textInput, setTextInput] = React.useState("");
	return (
		<View style={styles.container}>
			<div style={styles.output_container}></div>
			<TextInput
				value={textInput}
				onChangeText={setTextInput}
				style={styles.input}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#eee",
		width: "100%",
	},
	output_container: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
