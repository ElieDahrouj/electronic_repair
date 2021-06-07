import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const colorTextInput = "#FFC3A9"
const mainColor = "#FF8C00"
const secondaryColor = "#a1a6ac"
const colorGrayBorder = "#B8BBC6"
export const blackColor = "#36383c"
export const whiteSmoke = "#ffffff"

const borderRadiusSix = 6
const widthCategory = 180
const heightCategory= 180

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

export const categoryCss = StyleSheet.create({
    categoryView:{
        flex:1
    },

    scrollView:{
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'space-around'
    },

    picture:{
        width:widthCategory,
        height:heightCategory,
        borderRadius:borderRadiusSix,
        borderColor:colorGrayBorder,
        borderWidth:1,
    },

    button:{
        marginVertical:15,
        borderRadius:borderRadiusSix
    },

    ViewBtn:{
        position:'relative'
    },

    viewText:{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.7)',
        width:widthCategory,
        height:heightCategory,
        borderRadius:borderRadiusSix,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end'
    },

    textCategory:{
        textAlign:'center',
        color:'whitesmoke',
        marginBottom:10
    },

    textNumberAppliance:{
        textAlign:'center',
        marginBottom:5,
        color: whiteSmoke,
    }
})

export const shoppingCartCss = StyleSheet.create({
    scrollViewCCC:{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center'
    },
    firstTxt:{
        marginVertical: 10,
        fontSize:20,
        color:blackColor
    },
    secondTxt:{
        color:blackColor,
        fontSize:15,
    },
    mb:{
        marginTop:30
    }
})

export const categoryIdCss = StyleSheet.create({
    categoryIdView:{
        flex:1
    },

    pb15:{
        paddingBottom:15
    },

    viewPicture:{
      position:'relative'
    },

    picture:{
        width: Dimensions.get('window').width,
        height : 300,
        resizeMode: 'cover'
    },

    viewText:{
        position:'absolute',
        width: Dimensions.get('window').width,
        height : 300,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
    },

    textCategory:{
        color:whiteSmoke,
        fontSize:30,
        textAlign:'center'
    },

    viewIcon:{
        paddingHorizontal: 8,
        paddingTop:8,
        position:'absolute',
        top:0,
        left:0
    },

    viewAppliance:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal:8,
        padding:5,
        marginTop:27,
        borderWidth:1,
        borderColor:"#707070",
        borderRadius:6
    },

    pictureAppliance:{
        width : 150,
        height:150,
        resizeMode: 'contain'
    },

    viewTextAppliance:{
        width: Dimensions.get('window').width - 190,
    },

    textTitle:{
        fontWeight:'bold',
        fontSize:18
    },

    textDescription:{
        color:colorGrayBorder,
    },

    danger:{
      color:'#d71528'
    },

    beCareful:{
        color:'#ed7425'
    },

    warning:{
        color:'#fcc816'
    },

    good:{
        color:'#9dc318'
    },

    veryGood:{
        color:'#139441'
    },

    my10:{
        marginVertical : 10
    }
})

export const eshopCategoryIdCss = StyleSheet.create({
    textPrice: {
        marginVertical:5,
        fontSize:16,
        color:"#0C66FF"
    }
})
