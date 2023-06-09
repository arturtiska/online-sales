import { View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";
import { theme } from "../../../shared/themes/theme";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    }

    return (
        <View>
            <ContainerLogin>
                <Input placeholder="Digite seu email" title="Email:" />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="8px"
                    title="Entrar"
                    onPress={handleOnPress}

                />
            </ContainerLogin>
        </View>
    )
}

export default Login;