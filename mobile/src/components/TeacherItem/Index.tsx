import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineicon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export default function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/68063282?s=460&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Moacir Leal</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Exemplo de biografia
                {'\n'}{'\n'}
                Exemplo de biografia com dois espaços acima.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineicon} /> */}
                        <Image source={unfavoriteIcon}></Image>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}