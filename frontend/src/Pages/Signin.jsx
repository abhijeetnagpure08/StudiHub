import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Checkbox,
  Stack,
  Button,
  Link,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const signinSuccess = (msg) => {
    toast({
      title: msg,
      description: "Thank You!!",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const wrongEmail = (msg) => {
    toast({
      title: msg,
      description: "Please Enter Correct Email!!",
      status: "warning",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const fillAllCredential = (msg) => {
    toast({
      title: msg,
      description: "Please Share Required Info!!",
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const wrongCredential = (msg) => {
    toast({
      title: msg,
      description: "Please Enter Correct Password!!",
      status: "warning",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const submitLogin = () => {
    const payload = {
      email,
      password,
    };
    //.post(`${process.env.REACT_APP_SERVER}/users/login`, payload)
   // .post("http://localhost:8080/users/login", payload)

    axios
      .post("https://studi-hub-atlas.onrender.com/users/login", payload)
      .then((res) => {
        //alert(res.data.msg);
        localStorage.setItem("userName",res.data.name)
        localStorage.setItem("frontendtoken", res.data.token);
        if (res.data.msg === "Login Successful") {
          signinSuccess(res.data.msg);
          navigate("/homepage");
        }
        if (res.data.msg === "Please Fill All The Required Credentials") {
          fillAllCredential(res.data.msg);
        }
        if (res.data.msg === "Password Not Match!!") {
          wrongCredential(res.data.msg);
        }
        if (res.data.msg === "User Not Found!") {
          wrongEmail(res.data.msg);
        }
      })
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      pt={{base:"50px", md: "40px", lg: "80px" }}
    >
      <Stack
        //border={"1px solid red"}
        w={"1000px"}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign In </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#a435f0"}>Forgot password?</Link>
              </Stack>

              <Button
                onClick={submitLogin}
                bg={"#a435f0"}
                color={"white"}
                _hover={{
                  bg: "#9900ff",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                <NavLink style={{ color: "#a435f0" }} to="/admin-signin">
                  Login as Admin
                </NavLink>
              </Text>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Are you a New User?{" "}
                <NavLink style={{ color: "#a435f0" }} to="/signup">
                  Sign Up
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
