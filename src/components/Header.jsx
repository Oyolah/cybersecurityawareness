// components/Header.js

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box bg="blue.500" p={4} color="white">
            <Flex align="center">
                <Box>
                    <Link
                        as={RouterLink}
                        to="/"
                        fontWeight="bold"
                        fontSize="xl"
                    >
                        CyberSecurity Awareness
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Link fontWeight="bold" as={RouterLink} to="/" mr={4}>
                        Home
                    </Link>
                    <Link
                        fontWeight="bold"
                        as={RouterLink}
                        to="/resources"
                        mr={4}
                    >
                        Resources
                    </Link>
                    <Link fontWeight="bold" as={RouterLink} to="/quizzes">
                        Quizzes
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default Header;
