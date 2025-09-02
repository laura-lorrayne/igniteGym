import { Heading, HStack, VStack, Text } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w={"$full"}
      justifyContent="space-between"
      bg="$gray600"
      px={5}
      py={4}
      mb={3}
      rounded="$md"
      alignItems="center"
    >
      <VStack flex={1} mr={5}>
        <Heading
          color="$white"
          fontSize={"$md"}
          textTransform="capitalize"
          numberOfLines={1}
          fontFamily="$heading"
        >
          Costa
        </Heading>
        <Text color="$gray100" fontSize={"$lg"} numberOfLines={1}>
          Puxada Frontal
        </Text>
      </VStack>
      <Text color="$gray300" fontSize={"$md"}>
        {" "}
        08:56
      </Text>
    </HStack>
  );
}
