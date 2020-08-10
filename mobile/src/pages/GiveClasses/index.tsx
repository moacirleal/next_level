import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { View, ImageBackground, Text } from 'react-native'
import styles from './styles';
import giveClassesBgImages from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

export default function GiveClasses() {

    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBgImages}
                style={styles.content}
                resizeMode='contain'>
                    <Text style={styles.title}>Quer ser um Proffy?</Text>
                    <Text style={styles.description}>
                        Para começar, você precisa cadastrar como professor na nossa plataforma web.
                    </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}