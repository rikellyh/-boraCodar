import { Box, GridItem, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Message = ({ text, currentTime }) => {
  return (
    <>
      <GridItem
        maxW="10rem"
        m="0.5rem"
        justifySelf="right"
        sx={{
          "@media screen and (min-width: 767px)": {
            maxW: "25rem",
          },
        }}
      >
        <Box borderRadius="8px 8px 0 8px" p="0.5rem" bg="brand.green2">
          <Text fontSize="0.85rem" color="brand.white">
            {text}
          </Text>
        </Box>
        <Text fontSize="0.6rem" align="end" color="brand.white" mt="5px">
          {currentTime}
        </Text>
      </GridItem>
    </>
  );
};

export default Message;
