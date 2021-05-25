import React from 'react';
import {StyleSheet} from 'react-native';

const colorTextInput = "#FFC3A9"
const colorIcon = "#BEC2CE"
const mainColor = "#FF8C00"
const secondaryColor = "#E1E4E8"
const greenColor = "#7ED321"

export const headerCss = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    viewIconTextInput: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconSearch: {
        padding: 10
    },

    inputSearch: {
        height: 50,
        borderWidth: 1,
        borderColor: colorTextInput,
        borderRadius:6,
        position: 'absolute',
        width: 315,
        paddingLeft: 50
    },
});

export const homeCss = StyleSheet.create({
    homeView: {
        padding:8
    },

    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom:20
    },

    h1:{
        fontSize: 17,
        color: mainColor
    },

    author:{
        color:secondaryColor
    },

    span:{
        fontWeight: "bold"
    }
});
