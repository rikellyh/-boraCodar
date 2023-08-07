import { Container } from "@chakra-ui/react";

import HeaderAvatar from "../components/HeaderAvatar/HeaderAvatar";
import BoxMessage from "../components/BoxMessage/BoxMessage";

const RoomPage = () => {
  return (
    <>
      <Container maxW="1600px" p="0" my="1rem">
        <HeaderAvatar />
        <BoxMessage />
      </Container>
    </>
  );
};

export default RoomPage;
