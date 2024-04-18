import { View, Text, StyleSheet} from "react-native-web"


const EventDetailScreen = () =>{
    return (
        <View style ={styles.screen}>
            <Text>this is my event detail screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default EventDetailScreen;
