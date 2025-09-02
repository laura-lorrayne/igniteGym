import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, VStack, Text, Heading } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  return (
    <VStack>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: "https://github.com/Laura-lorrayne.png" }}
            w="$16"
            h="$16"
            alt="Imagem do usuário"
            size="xl"
          />

          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt={"$2"}
              mb={"$8"}
            >
              {" "}
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w={"$full"} gap={"$4"}>
            <Input placeholder="Nome" bg="$gray600" />
            <Input placeholder="E-mail" bg="$gray600" isReadOnly />
          </Center>

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt={"$12"}
            mb={"$2"}
          >
            Alterar senha
          </Heading>

          <Center w={"$full"} gap={"$4"}>
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
            <Input
              placeholder="Confirme a nova senha"
              bg="$gray600"
              secureTextEntry
            />
            <Button style={{ marginTop: 8 }} title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
