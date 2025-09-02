import { ExerciseCard } from "@components/ExerciseCard";
import { Groups } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
FlatList;
import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [groups, setGroups] = useState([
    "costa",
    "ombro",
    "biceps",
    "triceps",
    "perna",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada Frontal",
    "Remada Curvado",
    "Remada Unilateral",
    "Levantamento Terra",
    "Remada Baixa",
    "Puxada Frente",
    " Crucifixo Inverso",
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");
  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Groups
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize="$md " fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
