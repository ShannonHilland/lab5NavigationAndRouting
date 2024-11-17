import { 
    View, 
    Text,
    StyleSheet
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ToDoListPropsType = {
    tasks: Array<string>;
};

export default function ToDoList(props: ToDoListPropsType): React.JSX.Element {
    const toDoList = props.tasks;
    return(
        <View>
            <Text style={style.heading}>To Do List:</Text>
            {toDoList.map((task, index) => {
                return(
                    <View style={style.mapContainer}>
                        <BouncyCheckbox />
                        <Text key={index}>{task}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const style = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    mapContainer: {
        flexDirection: "row",
        padding: 10
    }
});