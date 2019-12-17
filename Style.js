
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
	fillColumn: {
		flex: 1,
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
	cardText: {
		marginLeft:10
	},
    textInput: {
        borderColor: '#aaaaaa',
        borderWidth: 1,
        padding: 5,
        margin: 10
    },
    separator: {
        marginVertical: 4,
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    primaryButton:
    {
        margin: 10,
        backgroundColor: '#81b9bf',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#52898f',
        height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    },
    secondaryButton:
    {
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#52898f',
        borderColor: '#225c62',
        height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    },
	deleteButton:
    {		
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#ff4d4d',
        borderColor: '#ff3434',
        height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    },
	iconButton: {
		borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#dddddd',
        borderColor: '#aaaaaa',
        height: 40,
        width: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 17,
	},
	plainList: {
		margin: 10 
	},
	listViewItem: {
		height:40,
        borderWidth: 0.5,
		borderColor: '#aaaaaa',
        paddingLeft: 10,
		justifyContent: 'center',
    },
	listViewItemText: {
        fontSize: 17
    },
});

export default styles;