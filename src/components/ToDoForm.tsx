import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import {useState} from 'react';

type ToDoFormPropsType = {
    addTask: (task: string) => void;
};

function ToDoForm(props: ToDoFormPropsType): React.JSX.Element {
    const [taskText, setTaskText] = useState('');
    const addTask = (task: string) => {
        props.addTask(task);
        setTaskText('');
    };
    return(
        <View>
            <TextInput 
                style={style.textInput}
                placeholder="Add a new task..." 
                value={taskText} 
                onChangeText={(text) => setTaskText(text)} />
            <TouchableOpacity style={style.btn} onPress={() => addTask(taskText)}>
                <Text>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: '#FFC484',
        fontWeight: '600',
        alignItems: 'center',
        width: 150,
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10

    },
    textInput: {
        padding: 10,
        margin: 10,
        backgroundColor: '#F3F3F3',
        borderRadius: 10
    }
});

export default ToDoForm;