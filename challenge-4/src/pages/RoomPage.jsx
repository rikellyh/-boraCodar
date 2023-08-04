import { Container, Box, Input, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import HeaderAvatar from "../components/HeaderAvatar/HeaderAvatar";
import BoxMessage from "../components/BoxMessage/BoxMessage";

const RoomPage = () => {
  return (
    <>
      <Container maxW="1600px" p="0" my="1rem">
        <HeaderAvatar />
        <BoxMessage />
        <Box
          maxH="6.25rem"
          maxW="55rem"
          m="1rem"
          borderRadius="25px"
          boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
          sx={{
            "@media screen and (min-width: 1000px)": {
              m: "1rem auto",
            },
          }}
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
            sx={{
              "@media screen and (min-width: 800px)": {
                w: "92%",
              },
            }}
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
