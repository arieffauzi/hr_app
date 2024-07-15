import LoginForm from '@/components/login/LoginForm'
import LoginProvider from '@/components/login/LoginProvider'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Login = () => {
  return (
    <LoginProvider>
      <ImageBackground
        width={100}
        height={100}
        source={require("../assets/images/login-bg.png")}
      >
        <SafeAreaView style={styles.page}>
          <View>
            <Text style={styles.title}>Sign in to HR App</Text>
          </View>

          <LoginForm />
        </SafeAreaView>
      </ImageBackground>
    </LoginProvider>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    marginTop: "50%",
    height:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
    color:'white'
  },
});