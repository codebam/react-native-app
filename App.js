import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
	const [textInput, setTextInput] = React.useState("");
	return (
		<View style={styles.container}>
			<Text>Input text below</Text>
			<TextInput
				value={textInput}
				onChange={setTextInput}
				style={styles.input}
			/>
			<Button title="submit" color="#000" />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#eee",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
