import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/Index';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'


export default function TeacherList() {

    const [isfiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFilterVisible(){
        setIsFiltersVisible(!isfiltersVisible)
    }

    return (
        <View style={styles.container}>
            <PageHeader 
            title='Proffys disponíveis' 
            headerRight={(
                <BorderlessButton onPress={handleToggleFilterVisible}>
                    <Feather name='filter' size={20} color="#fff" />
                </BorderlessButton>
            )} >
                {isfiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria ?"
                            placeholderTextColor='#c1bcc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor='#c1bcc'
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor='#c1bcc'
                                />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}