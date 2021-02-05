import React from 'react';
import {WebView } from 'react-native';

function Profile({github_username}){
    return <WebView source={{uri:`https://github.com/${github_username}`}} style={{flex:1}}></WebView>
}

export default Profile;