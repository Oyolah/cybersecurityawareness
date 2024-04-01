import React from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    Container,
    Flex,
    Image,
    Link,
} from "@chakra-ui/react";
import cybersecurityImage from "../media/cyber-security.jpg";
import HackingImage from "../media/hacking.png";

const LandingPage = () => {
    return (
        <Box>
            {/* About Section */}
            <Box py={20}>
                <Container maxW="container.lg">
                    <Heading as="h2" size="xl" mb={8}>
                        About Cybersecurity Awareness
                    </Heading>
                    <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box
                            flex="1"
                            mr={{ base: 0, md: 8 }}
                            mb={{ base: 8, md: 0 }}
                        >
                            <Image
                                src={cybersecurityImage}
                                alt="Cybersecurity"
                                mb={4}
                            />
                            <Text fontSize="xl">
                                Cybersecurity awareness is crucial in today's
                                digital world, where cyber threats are becoming
                                increasingly sophisticated and prevalent.
                            </Text>
                        </Box>
                        <Box flex="1">
                            <Image
                                src={HackingImage}
                                alt="Data Protection"
                                mb={4}
                            />
                            <Text fontSize="xl">
                                By educating yourself and staying informed about
                                cybersecurity best practices, you can protect
                                yourself, your devices, and your data from cyber
                                attacks.
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            {/* Resources Section */}
            <Box bg="gray.100" py={20}>
                <Container maxW="container.lg">
                    <Heading as="h2" size="xl" mb={8}>
                        Explore Cybersecurity Resources
                    </Heading>
                    <Button colorScheme="blue" size="lg">
                        <Link to="/quizzes">View Resources</Link>
                    </Button>
                </Container>
            </Box>

            {/* Take Action Section */}
            <Box py={20} textAlign="center">
                <Container maxW="container.lg">
                    <Heading as="h2" size="xl" mb={8}>
                        Take Action Against Cyber Threats
                    </Heading>
                    <Text fontSize="xl" mb={8}>
                        Stay informed, update your software, use strong
                        passwords, and secure your network to defend against
                        cyber attacks.
                    </Text>
                    <Button colorScheme="teal" size="lg">
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Tips and Best Practices Section */}
            <Box bg="gray.200" py={20}>
                <Container maxW="container.lg">
                    <Heading as="h2" size="xl" mb={8}>
                        Tips and Best Practices
                    </Heading>
                    <Text fontSize="xl" mb={8}>
                        Stay safe online with these essential cybersecurity tips
                        and best practices:
                    </Text>
                    <Box maxW="lg" mx="auto">
                        <Text fontSize="xl" mb={4}>
                            1. Keep your software up to date to patch security
                            vulnerabilities.
                        </Text>
                        <Text fontSize="xl" mb={4}>
                            2. Use strong, unique passwords for each of your
                            online accounts.
                        </Text>
                        <Text fontSize="xl" mb={4}>
                            3. Enable multi-factor authentication for an extra
                            layer of security.
                        </Text>
                        <Text fontSize="xl" mb={4}>
                            4. Be cautious of phishing emails and never click on
                            suspicious links.
                        </Text>
                        <Text fontSize="xl" mb={4}>
                            5. Regularly back up your important files and data
                            to a secure location.
                        </Text>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
