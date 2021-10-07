import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles';

export function SignIn() {

    return (
        <View style={ styles.container }>
            <Image source={ IlustrationImg }
                style = { styles.image } 
                resizeMode = "stretch"
            />

            <View style = {styles.content}>
                
                <Text style = {styles.title}>
                    Organize {'\n'}
                    suas jogatinas {'\n'}
                    facilmente {'\n'}
                </Text>

                <Text style = {styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos.
                </Text>

            </View>
        </View>
    );

}