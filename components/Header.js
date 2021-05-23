import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {headerCss} from '../assets/css/appStyle'

const header = () => {
    const [text, setText] = useState('');
    return (
        <View style={headerCss.headerView}>
            <View style={headerCss.viewIconTextInput}>
                <Ionicons name="search" style={headerCss.iconSearch} size={30} color={"#BEC2CE"} />
                <TextInput
                    style={headerCss.inputSearch}
                    onChangeText={text => setText(text)}
                    value={text}
                />
            </View>

            <Ionicons name="person-circle" size={55} color={"#BEC2CE"} />
        </View>
    );
}

export default header;
