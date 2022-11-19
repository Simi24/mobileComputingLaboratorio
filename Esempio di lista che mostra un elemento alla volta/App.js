import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions } from 'react-native';
import TwokRow from './components/TwokRow';

export default function App() {
  const twoks = [
    {"tid":1, "text": "ciao come va?"},
    {"tid":1, "text": "Male, malissimo"},
    {"tid":1, "text": "Buongiorno caffè?"},
    {"tid":1, "text": "Che schifo"},

  ]
  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.listStyle} data={twoks}
        renderItem={(twok)=>{return <TwokRow data={twok}/>}}
        keyExtractor={(twok)=>twok.id} 
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment="start"
        decelerationRate="fast"
        onScrollEndDrag={()=>console.log("Ho Scrollato")}
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyle: {
    width: "100%"
  }
});
