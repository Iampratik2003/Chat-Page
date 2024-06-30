import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Login, Signup } from "../components";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container maxWidth="xl" textAlign="center">
      <Box
        bg="teal.500"
        py={6}
        px={4}
        mt={10}
        borderRadius="xl"
        boxShadow="md"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="sans-serif" color="white">
          Chat-Page
        </Text>
      </Box>

      <Box bg="white" mt={8} p={4} borderRadius="xl" boxShadow="md">
        <Tabs isFitted variant="enclosed-colored" colorScheme="teal">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
