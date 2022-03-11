import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.listView}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'darkgrey'
  },
  searchBar: {
    padding: 16,
  },
  listView: {
    padding: 16,
    flex: 1,
    backgroundColor: 'grey'
  }
})