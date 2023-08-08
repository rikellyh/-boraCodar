import { Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Avatar from "../../assets/avatar.jpeg";

const HeaderAvatar = () => {
  return (
    <Flex
      boxShadow="0px 3px rgba(0, 0, 0, 0.1)"
      alignItems="center"
      pl="0.5rem"
      pb="0.5rem"
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
  );
};

export default HeaderAvatar;
