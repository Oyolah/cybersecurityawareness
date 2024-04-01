// components/Footer.js

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, SimpleGrid, Heading, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Box bg="gray.200" py={12} position="absolute" bottom="0" width="100%">
            <SimpleGrid
                columns={{ base: 1, md: 4 }}
                spacing={8}
                mx="auto"
                maxW="container.lg"
            >
                {/* Column 1: CyberSecurity Awareness */}
                <Box>
                    <Heading as="h3" size="md" mb={4}>
                        CyberSecurity Awareness
                    </Heading>
                    <Text>
                        Cybersecurity awareness is essential for equipping
                        individuals and organizations with the knowledge and
                        skills to protect themselves against cyber threats.
                    </Text>
                </Box>

                {/* Column 2: Social Media */}
                <Box>
                    <Heading as="h3" size="md" mb={4}>
                        Social Media
                    </Heading>
                    <Flex>
                        <Link
                            to="https://www.facebook.com/oyolah.mustapha"
                            mr={4}
                        >
                            <FaFacebook fontSize={30} isExternal />
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/oyolah-mustapha-kamara-898252140/"
                            mr={4}
                        >
                            <FaLinkedin fontSize={30} isExternal />
                        </Link>
                        <Link to="https://www.instagram.com/oyolah.sl/">
                            <FaInstagram fontSize={30} isExternal />
                        </Link>
                    </Flex>
                </Box>

                {/* Column 3: Navigation Links */}
                <Box>
                    <Heading as="h3" size="md" mb={4}>
                        Navigation Links
                    </Heading>
                    <Box>
                        <Link as={RouterLink} to="/" mr={4}>
                            Home
                        </Link>
                        <Link as={RouterLink} to="/resources" mr={4}>
                            Resources
                        </Link>
                        <Link as={RouterLink} to="/quizzes">
                            Quizzes
                        </Link>
                    </Box>
                </Box>

                {/* Column 4: Other Cybersecurity Resources */}
                <Box>
                    <Heading as="h3" size="md" mb={4}>
                        Other Cybersecurity Resources
                    </Heading>
                    <ul>
                        <li>
                            <Link
                                isExternal
                                href="https://krebsonsecurity.com/"
                                mr={4}
                            >
                                Krebs on Security - Cybersecurity Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                isExternal
                                href="https://www.nist.gov/cyberframework"
                                mr={4}
                            >
                                NIST
                            </Link>
                        </li>
                        <li>
                            <Link
                                isExternal
                                href="https://www.infosecurity-magazine.com/"
                            >
                                Infosecurity Magazine
                            </Link>
                        </li>
                    </ul>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default Footer;
