import React, { useState } from "react";
import { Image, Dimensions, View, Text, SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from "../../colors/colors";

export const Onboarding = ({navigation}) => {

    const screens = [
        {
            id: 1,
            image: require('../../Photos/one.png'),
            title: 'sinqly',
            subTitle: 'find your soul mate',
            titleSet: {fontWeight: 'bold', fontSize: 52, textTransform: 'uppercase', textAlign: 'center', letterSpacing: 21},
            subTitleSet: { fontSize: 20, lineHeight: 20, textAlign: 'center', textTransform: 'capitalize', marginVertical: 20 }
        },
        {
            id: 2,
            image: require('../../Photos/two.png'),
            title: 'Share your interests with the whole world.',
            subTitle: 'Matches are based on common interests and languages. Ready to seal your first letter and meet a new love?',
            titleSet: {fontWeight: 'bold', fontSize: 22, paddingHorizontal: 20, textTransform: 'uppercase', textAlign: 'center' },
            subTitleSet: { fontSize: 20, lineHeight: 20, textAlign: 'center', paddingHorizontal: 20, textTransform: 'capitalize', marginVertical: 20 }
            
            
        },
        {
            id: 3,
            image: require('../../Photos/there.png'),
            title: 'Let’s start your journey with us now!',
            subTitle: 'Do not wait until the conditions are perfect to begin. Beginning makes the conditions perfect.',
            titleSet: {fontWeight: 'bold', fontSize: 22, paddingHorizontal: 20, textTransform: 'uppercase', textAlign: 'center' },
            subTitleSet: { fontSize: 20, lineHeight: 20, textAlign: 'center', paddingHorizontal: 20, textTransform: 'capitalize', marginVertical: 20 }
        }
    ]
    const buttonLabel = (label) => {
        return(
            <View
                style={{width: '100%', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 21, backgroundColor: COLORS.yellow}}>
                <Text style={{color: COLORS.black}}>{label}</Text>
            </View>
        )
    }
    const skipButton = (label) => {
        return(
            <View
                style={{
                    marginVertical: 10,
                    width: '100%', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: 45, 
                    borderRadius: 21, 
                    backgroundColor: '#f5f5f5',
                    flexDirection: 'row',
                    shadowColor: COLORS.secondary,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 4,
                    }}>
                <Icon name="exit-to-app" size={22} color={COLORS.black} />
                <Text style={{color: COLORS.black, marginLeft: 10}}>{label}</Text>
            </View>
        )
    }

    const WIDTH = Dimensions.get('window').width

    const [showHomePage, setShowHomePage] = useState(false)

    if(!showHomePage) {
        return(
            <AppIntroSlider 
                style={{backgroundColor: COLORS.white}}
                data={screens}
                renderItem={({item}) => {
                    return (
                        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                key={1}
                                source={item.image}
                                style={{width: WIDTH - 80, height: 400}}
                                resizeMode={'contain'}
                            />
                            <View>
                                <Text style={item.titleSet}>
                                    {item.title}
                                </Text>

                                <Text style={item.subTitleSet}>
                                    {item.subTitle}
                                </Text>
                            </View>
                        </View>
                    )
                }}
                bottomButton
                showSkipButton
                activeDotStyle={{
                    backgroundColor: COLORS.yellow,
                    width: 30
                }}
                renderNextButton={() => buttonLabel('Next')}
                renderDoneButton={() => buttonLabel('Let’s start')}
                renderSkipButton={() => skipButton('Already have Account?')}

                onDone={() => navigation.navigate('RegistrationScreen')}
                onSkip={() => navigation.navigate('HomeScreen')}
            />
        )
    }
}