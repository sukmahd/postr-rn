import { Text, TextInput, View, StyleSheet } from "react-native"
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { useState, useLayoutEffect } from "react";


const OptionScreen: React.FC = ({ navigation, route }) => {
    const { t, i18n } = useTranslation();
    const [lang, changeLang] = useState('en');
    const selectedLanguageCode = i18n.language;
    const languages = [ // Language List
        { code: 'en', label: t('language:english') },
        { code: 'id', label: t('language:indonesia') },
       ];

    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown: true,
         headerTitle: t('common:option'),
        });
        return () => {};
       }, [navigation, lang]);

    return (
        <View>
            
        {languages.map((currentLang, i) => {
            
            const selectedLanguage = currentLang.code === selectedLanguageCode;
            return (
            <Text
                key={i}
                onPress={() => {
                    changeLang(currentLang.code);
                    i18n.changeLanguage(currentLang.code); // it will change the language through out the app.
                }}
                style={{
                color: selectedLanguage ? "red" : 'black',
                padding: 10,
                fontSize: 18,
                fontWeight: selectedLanguage ? 'bold' : 'normal',
            }}>
                {currentLang.label}
            </Text>
            );
        })}
        </View>
    )
}

export default OptionScreen