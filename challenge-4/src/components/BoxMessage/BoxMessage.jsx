import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { useTime } from "../../utils/time";

import "../../styles.css";

const BoxMessage = () => {
  const { currentTime } = useTime();

  return (
    <VStack minH="70vh" mt="1.5rem" gap="unset">
      <Text textAlign="center" fontSize="0.8rem" color="brand.white">
        {currentTime}
      </Text>
      <Grid
        w="85%"
        h="65vh"
        mt="1.25rem"
        overflow="auto"
        templateRows="repeat(7, 1fr)"
        className="custom-scrollbar"
      >
        <GridItem maxW="10rem" m="0.5rem">
          <Box borderRadius="0 8px 8px 8px" p="0.5rem" bg="brand.purple1">
            <Text fontSize="0.8rem" color="brand.white">
              Eae, vamo ver Barbie hoje?
            </Text>
          </Box>
          <Text fontSize="0.6rem" align="start" color="brand.white" mt="5px">
            {currentTime}
          </Text>
        </GridItem>
        <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
          <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
            <Text fontSize="0.8rem" color="brand.white">
              Talvez
            </Text>
          </Box>
          <Text fontSize="0.6rem" align="end" color="brand.white" mt="5px">
            {currentTime}
          </Text>
        </GridItem>
        <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
          <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
            <Text fontSize="0.8rem" color="brand.white">
              Preciso ir ao mercado
            </Text>
          </Box>
          <Text fontSize="0.6rem" align="end" color="brand.white" mt="5px">
            {currentTime}
          </Text>
        </GridItem>
        <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
          <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
            <Text fontSize="0.8rem" color="brand.white">
              Dia de fazer feira 🥱
            </Text>
          </Box>
          <Text fontSize="0.6rem" align="end" color="brand.white" mt="5px">
            {currentTime}
          </Text>
        </GridItem>
        <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
          <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
            <Text fontSize="0.8rem" color="brand.white">
              Podemos ir amanhã?
            </Text>
          </Box>
          <Text fontSize="0.6rem" align="end" color="brand.white" mt="5px">
            {currentTime}
          </Text>
        </GridItem>
        <GridItem maxW="10rem" m="0.5rem" justifySelf="right">
          <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
            <Text fontSize="0.8rem" align="end" color="brand.white">
              ?
            </Text>
          </Box>
          <Text fontSize="0.6rem" align="end" color="brand.white" mt="5px">
            {currentTime}
          </Text>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default BoxMessage;
