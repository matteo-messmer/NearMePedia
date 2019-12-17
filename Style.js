
import { StyleSheet } from 'react-native';

const primaryColor = '#81b9bf';
const primaryDarkColor = '#52898f';
const secondaryColor = '#52898f';
const secondaryDarkColor = '#225c62';
const red = '#ff4d4d';
const darkRed = '#ff4d4d';
const lightGray = '#eeeeee';
const gray = '#dddddd';
const darkGray = '#aaaaaa';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightGray,
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
        borderColor: darkGray,
        borderWidth: 1,
        padding: 5,
        margin: 10
    },
    separator: {
        marginVertical: 4,
        borderBottomColor: darkGray,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    primaryButton:
    {
        margin: 10,
        backgroundColor: primaryColor,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: primaryDarkColor,
        height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    },
    secondaryButton:
    {
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        backgroundColor: secondaryColor,
        borderColor: secondaryDarkColor,
        height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    },
	deleteButton:
    {		
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        backgroundColor: red,
        borderColor: darkRed,
        height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    },
	iconButton: {
		borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        backgroundColor: gray,
        borderColor: darkGray,
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
		borderColor: darkGray,
        paddingLeft: 10,
		justifyContent: 'center',
    },
	listViewItemText: {
        fontSize: 17
    },
	marker: {
		borderRadius: 4,
		padding: 10,
		fontSize:17,
	}
});

export default styles;