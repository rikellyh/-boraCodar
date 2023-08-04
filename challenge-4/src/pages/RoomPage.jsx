import {
  Container,
  Flex,
  Icon,
  Image,
  Text,
  VStack,
  HStack,
  Box,
  Grid,
  GridItem,
  Input,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";

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
      <Container maxW="850px" p="0" my="1rem">
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
        <VStack mt="1.5rem" gap="unset">
          <Text textAlign="center" fontSize="0.75rem" color="brand.white">
            {currentTime}
          </Text>
          <Grid
            w="90%"
            h="100vh"
            maxH="350px"
            mt="1.25rem"
            overflow="auto"
            templateRows="repeat(2, 1fr)"
          >
            <GridItem maxW="10rem" m="0.5rem">
              <Box borderRadius="0 8px 8px 8px" p="0.5rem" bg="brand.purple1">
                <Text fontSize="0.75rem" color="brand.white">
                  Eae, vamo ver Barbie hoje?
                </Text>
              </Box>
              <Text fontSize="0.6rem" color="brand.white" mt="5px">
                {currentTime}
              </Text>
            </GridItem>
            <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
              <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
                <Text fontSize="0.75rem" color="brand.white">
                  Talvez
                </Text>
              </Box>
              <Text fontSize="0.6rem" color="brand.white" mt="5px">
                {currentTime}
              </Text>
            </GridItem>
            <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
              <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
                <Text fontSize="0.75rem" color="brand.white">
                  Preciso ir ao mercado
                </Text>
              </Box>
              <Text fontSize="0.6rem" color="brand.white" mt="5px">
                {currentTime}
              </Text>
            </GridItem>
            <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
              <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
                <Text fontSize="0.75rem" color="brand.white">
                  Dia de fazer feira 🥱
                </Text>
              </Box>
              <Text fontSize="0.6rem" color="brand.white" mt="5px">
                {currentTime}
              </Text>
            </GridItem>
            <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
              <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
                <Text fontSize="0.75rem" color="brand.white">
                  Podemos ir amanhã?
                </Text>
              </Box>
              <Text fontSize="0.6rem" color="brand.white" mt="5px">
                {currentTime}
              </Text>
            </GridItem>
            <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
              <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
                <Text fontSize="0.75rem" color="brand.white">
                  ?
                </Text>
              </Box>
              <Text fontSize="0.6rem" color="brand.white" mt="5px">
                {currentTime}
              </Text>
            </GridItem>
          </Grid>
        </VStack>
        <Box
          maxH="6.25rem"
          w="90%"
          mx="auto"
          borderRadius="25px"
          boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
        >
          <Input
            w="86%"
            placeholder="Digite sua mensagem"
            variant="unstyled"
            color="brand.white"
            fontSize="0.75rem"
            border="none"
            outline="none"
            padding="0.5rem 1rem"
          />
          <Button
            w="1rem"
            h="2.5rem"
            bg="transparent"
            border="none"
            outline="none"
            _hover={{
              bg: "none",
              color: "inherit",
              textDecoration: "none",
              boxShadow: "none",
            }}
          >
            <ChevronRightIcon w="1.5rem" h="1.5rem" color="brand.white" />
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default RoomPage;
