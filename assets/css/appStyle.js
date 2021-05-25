import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const colorTextInput = "#FFC3A9"
const colorIcon = "#BEC2CE"
const mainColor = "#FF8C00"
const secondaryColor = "#a1a6ac"
const greenColor = "#7ED321"
const colorGrayBorder = "#B8BBC6"
export const blackColor = "#36383c"
export const whiteSmoke = "#ffffff"

export const headerCss = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:8,
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
        flex:1
    },

    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom:10,
        paddingHorizontal:8,
    },

    scrollViewCss:{
        height:675
    },

    viewEachTutorial:{
        padding:8,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center",
    },

    viewPicture:{
        paddingRight:10
    },

    picture:{
        width:130,
        height:130,
        borderRadius:6,
        borderColor:colorGrayBorder,
        borderWidth:1
    },

    viewInformation:{
        width:Dimensions.get('window').width - 150
    },

    h1:{
        fontSize: 17,
        color: mainColor,
    },

    author:{
        color:secondaryColor,
        marginTop:5
    },

    span:{
        fontWeight: "bold"
    },

    viewMoreInformation:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:10
    }
});
