import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
  Box,
  Text,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    setLoading(true);

    if (!credentials.email || !credentials.password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const data = await response.json();
     
      toast({
        title: data.message,
        status: !data.success ? "error" : "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: !data.success ? "left-accent" : "solid",
      });

      if (data.success) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        
        setLoading(false);
        navigate("/chats");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Internal server error",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "solid",
      });
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="10"
      py="8"
      px={{ base: '4', md: '8' }}
      bg="gray.100"
      boxShadow="2xl"
      borderRadius="xl"
    >
      <Stack spacing="6">
        <VStack spacing="5" align="stretch">
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={credentials.email}
              placeholder="Enter your email"
              onChange={(e) => handleCredentials(e)}
              bg="white"
              borderColor="teal.300"
              _hover={{ borderColor: "teal.500" }}
              focusBorderColor="teal.500"
              borderRadius="md"
              boxShadow="sm"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputRightElement w="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShow(!show)}
                  bg="teal.400"
                  color="white"
                  _hover={{ bg: "teal.500" }}
                  borderRadius="md"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
              <Input
                type={show ? "text" : "password"}
                name="password"
                value={credentials.password}
                placeholder="Enter your password"
                onChange={(e) => handleCredentials(e)}
                bg="white"
                borderColor="teal.300"
                _hover={{ borderColor: "teal.500" }}
                focusBorderColor="teal.500"
                borderRadius="md"
                boxShadow="sm"
              />
            </InputGroup>
          </FormControl>
        </VStack>

        <Button
          colorScheme="teal"
          width="100%"
          mt="6"
          onClick={submitHandler}
          isLoading={loading}
          borderRadius="md"
          boxShadow="sm"
        >
          Login
        </Button>

        <HStack justify="center" mt="3">
          <Divider flex="1" />
          <Text fontSize="sm" color="gray.500">or</Text>
          <Divider flex="1" />
        </HStack>

        <Button
          variant="outline"
          colorScheme="teal"
          width="100%"
          mt="3"
          onClick={() => {
            setCredentials({ email: "guest@example.com", password: "12345678" });
          }}
          borderRadius="md"
          boxShadow="sm"
        >
          <i
            className="fas fa-user-alt"
            style={{ fontSize: "15px", marginRight: 8 }}
          />
          Get Guest User Credentials
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
