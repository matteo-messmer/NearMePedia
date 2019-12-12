
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#eeeeee',
        //justifyContent: 'space-between',
        textAlign: 'center',
    },

    containerb: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    article: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },

    background: {
        backgroundColor: '#eeeeee',
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 10,
        marginLeft: 1,
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 23,
        fontWeight: 'bold',
    },

    body: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 19,
    },

    separator: {
        marginVertical: 4,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 10
    },

    button:
    {
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        margin: 10,
        color: "black",
        backgroundColor: '#81b9bf',
        borderColor: '#52898f',
        height: 50,
        width: 150,
    },

    saveButton:
    {
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        margin: 10,
        color: "black",
        backgroundColor: '#52898f',
        borderColor: '#225c62',
        height: 50,
        width: 100
    },

});

export default styles;