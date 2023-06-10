import { View } from "react-native";
import { ContainerLogin } from "../styles/login.style";

import Button from "../../../shared/components/button/Button";

import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/Icon";
import Input from "../../../shared/components/input/Input";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou');
    }

    return (
        <View>
            <ContainerLogin>
                <Input margin="0px 0px 8px 0px" placeholder="Digite seu email" title="Email:" />
                <Input secureTextEntry placeholder="Digite sua senha" title="Senha:" />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px"
                    title="Entrar"
                    onPress={handleOnPress}

                />
            </ContainerLogin>
        </View>
    )
}

export default Login;