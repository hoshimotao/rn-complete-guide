- It's a good idea to wrap <Text> elements in a <View> element for more styling options.

- ScrollView is another important component in ReactNative and must be explicitly imported at the top ---> 

import { StyleSheet, Text, View, TextInput, Button, ScrollView })

- by adding horizontal as an attribute, you can scroll sideways if necessary.

"<ScrollView horizontal>"

<FlatList/> - import from ReactNative for very long lists. Self closing element. <FlatList />. Uses two properties (data{} - which is an array. And a function called itemData{} which contains the list of items to display). GREAT FOR PERFORMANCE 

QUIZ:

1) How do you output a list (array) of content in React apps?

A: Use map() to map(=transform) the array of data into an array of components.

2) Why might you need a <ScrollView> instead of a normal <View>?

A: Unlike browser, mobile apps don't give you automatic scrolling. <ScrollView> adds it.

3) What's the core difference between <FlatList> and <ScrollView>?

A: FlatList optimizes scrolling by only rendering what is required.




<Touchable> component is useful for enabling touch events, such as deleting an item, or taking user to a linked website.
<TouchableOpacity> component can give the on press event a nice effect as it's being deleted.