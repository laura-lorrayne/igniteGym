import {
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Icon,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr={"$4"}
        rounded={"$md"}
        mb={"$3"}
      >
        <Image
          source={{
            uri: "https://image.tuasaude.com/media/article/ku/ib/treino-costas_73930.gif?width=686&height=487",
          }}
          alt="Imagem de um exercício"
          w="$16"
          h="$16"
          rounded={"$md"}
          mr={"$4"}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize={"$lg"} color="$white" fontFamily="$heading">
            Puxada Frontal
          </Heading>
          <Text color="$gray200" fontSize={"$sm"} mt={"$1"} numberOfLines={2}>
            3 series x 12 repetiçoes
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
