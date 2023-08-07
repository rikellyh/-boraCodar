import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { useTime } from "../../utils/time";
import "../../styles.css";
import Message from "./Message/Message";

const BoxMessage = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const { currentTime } = useTime();

  function sendMessage() {
    if (text.trim() !== "") {
      setMessages([...messages, text]);
      setText("");
    }
  }

  return (
    <>
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
          <GridItem
            maxW="10rem"
            m="0.5rem"
            sx={{
              "@media screen and (min-width: 1000px)": {
                maxW: "25rem",
              },
            }}
          >
            <Box borderRadius="0 8px 8px 8px" p="0.5rem" bg="brand.purple1">
              <Text fontSize="0.85rem" color="brand.white">
                Olá, como está se sentindo hoje?
              </Text>
            </Box>
            <Text fontSize="0.6rem" align="start" color="brand.white" mt="5px">
              {currentTime}
            </Text>
          </GridItem>
          {messages.map((message, index) => (
            <Message key={index} text={message} currentTime={currentTime} />
          ))}
        </Grid>
      </VStack>
      <Box
        maxH="5rem"
        maxW="55rem"
        m="0.5rem"
        borderRadius="25px"
        boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
        sx={{
          "@media screen and (min-width: 1000px)": {
            m: "0.5rem auto",
          },
        }}
      >
        <Textarea
          w="86%"
          maxLength={700}
          placeholder="Digite sua mensagem"
          resize="none"
          value={text}
          onChange={(event) => setText(event.target.value)}
          variant="unstyled"
          color="brand.white"
          fontSize="0.85rem"
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
          mf="0.75rem"
          onClick={sendMessage}
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
    </>
  );
};

export default BoxMessage;
