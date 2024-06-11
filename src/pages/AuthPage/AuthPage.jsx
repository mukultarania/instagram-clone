import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH="100vh" justify="center" align="center" px={4}>
      <Container maxW="container.md" p={0}>
        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" gap={10}>
          {/* Left hand-side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>

          {/* Right hand-side */}
          <VStack spacing={4} align="stretch">
            <AuthForm />
            <Box textAlign="center">Get the app.</Box>
            <Flex gap={5} justify="center">
              <Image src="/playstore.png" h="10" alt="Playstore logo" />
              <Image src="/microsoft.png" h="10" alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
