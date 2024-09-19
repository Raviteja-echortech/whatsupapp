import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { SvgXml } from "react-native-svg"
import ICONS from "./Assets/Icons"

const App = () => {
  return (
    <SafeAreaView style={Styles.container} >
      <View>
        <SvgXml xml={ICONS.LeftArrow} />
         <View>
          <Image source={{uri:"https://t3.ftcdn.net/jpg/05/66/68/36/360_F_566683667_BeBecGFABNQYkZhquqJxhSj7UOcCY7ZJ.jpg"}}  />
         </View>
      </View>
    </SafeAreaView>
  )
}
export default App
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  
  
})