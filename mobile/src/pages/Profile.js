<<<<<<< HEAD
import React from 'react';
import {WebView } from 'react-native';

function Profile({github_username}){
    return <WebView source={{uri:`https://github.com/${github_username}`}} style={{flex:1}}></WebView>
}

=======
import React from 'react';
import {WebView } from 'react-native';

function Profile({github_username}){
    return <WebView source={{uri:`https://github.com/${github_username}`}} style={{flex:1}}></WebView>
}

>>>>>>> 3725d650198039c62d6c0b3b66155515247bc1ca
export default Profile;