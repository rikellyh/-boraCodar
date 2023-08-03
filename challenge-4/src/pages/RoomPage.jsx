import {
  Container,
  Flex,
  Icon,
  Image,
  Text,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import Avatar from "../assets/avatar.jpeg";
import { useEffect, useState } from "react";

const RoomPage = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Função para obter a hora e o minuto atual no formato desejado
    const getCurrentTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const formattedTime = `Hoje - ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      return formattedTime;
    };

    // Atualiza o estado com a hora e o minuto atual a cada segundo
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container p="0" my="1rem">
        <Flex
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          alignItems="center"
          pl="0.5rem"
          pb="1rem"
          gap="1rem"
        >
          <ArrowBackIcon
            color="brand.white"
            cursor="pointer"
            boxSize="1.25rem"
            m="0.5rem"
          />
          <HStack w="100%" gap="0.85rem">
            <Image
              borderRadius="full"
              objectFit="cover"
              maxW="3rem"
              h="3rem"
              w="100%"
              src={Avatar}
              alt="Avatar"
            />
            <VStack gap="unset" w="100%" alignItems="baseline">
              <Text as="b" color="brand.white">
                Kelly EPTA
              </Text>
              <HStack color="#00B37E">
                <Icon viewBox="0 0 200 200" boxSize="0.5rem">
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Text fontSize=".75rem">Online</Text>
              </HStack>
            </VStack>
          </HStack>
        </Flex>
        <Box mt="1.5rem">
          <Text textAlign="center" fontSize="0.75rem" color="brand.white">
            {currentTime}
          </Text>
          <Box w="50%" m="1rem">
            <Box borderRadius="0 8px 8px 8px" p="0.5rem" bg="brand.purple1">
              <Text fontSize="0.75rem" color="brand.white">
                Eae, vamo ver Barbie hoje?
              </Text>
            </Box>
            <Text fontSize="0.6rem" color="brand.white" mt="5px">
              {currentTime}
            </Text>
          </Box>
          <Box w="50%" m="1rem">
            <Box borderRadius="0 8px 8px 8px" p="0.5rem" bg="brand.green2">
              <Text fontSize="0.75rem" color="brand.white">
                Vou ver e te aviso
              </Text>
            </Box>
            <Text fontSize="0.6rem" color="brand.white" mt="5px">
              {currentTime}
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RoomPage;
