import React from "react";
import { Box, Heading, Text, Link, SimpleGrid } from "@chakra-ui/react";

const EducationalResourcesPage = () => {
    return (
        <Box p={8}>
            <Heading as="h1" mb={8}>
                Cybersecurity Resources
            </Heading>
            <Box mb={6}>
                <Heading as="h2" size="lg" mb={4}>
                    1. Online Courses
                </Heading>
                <Text mb={2}>
                    Enhance your cybersecurity skills with these online courses:
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <ResourceCard
                        title="Google Cybersecurity Certificate"
                        description="These courses will equip you with the skills you need to prepare for an entry-level cybersecurity job. In this course, you will be introduced to the world of cybersecurity through an interactive curriculum developed by Google. You will identify significant events that led to the development of the cybersecurity field, explain the importance of cybersecurity in today's business operations, and explore the job responsibilities and skills of an entry-level cybersecurity analyst. "
                        url="https://www.youtube.com/watch?v=_DVVNOGYtmU&list=PLTZYG7bZ1u6ocTMdhDwwmfjaNv134KcWn"
                    />
                    <ResourceCard
                        title="Introduction to Cybersecurity edX course."
                        description="This is CS50's introduction to cybersecurity for technical and non-technical audiences alike. Learn how to protect your own data, devices, and systems from today's threats and how to recognize and evaluate tomorrow's as well, both at home and at work."
                        url="https://www.edx.org/learn/cybersecurity/harvard-university-cs50-s-introduction-to-cybersecurity?index=product&queryID=16d32eac9bc2e6033ad028f5e5ca7eb5&position=1&results_level=first-level-results&term=cybersecurity&objectID=course-88391405-e329-495d-bf72-5de13bbf1846&campaign=CS50%27s+Introduction+to+Cybersecurity&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch"
                    />
                    <ResourceCard
                        title="Cybersecurity Courses on Udemy"
                        description="Find a cyber security course on Udemy, and gain skills to help you counter cyber threats and grow as a cyber security specialist. With cyber security training, you can develop expertise that is expected to be in demand well into the future. Cyber security knowledge adds to your IT toolkit and is a valuable asset in any technological field."
                        url="https://www.udemy.com/topic/cyber-security/"
                    />
                </SimpleGrid>
            </Box>

            <Box mb={6}>
                <Heading as="h2" size="lg" mb={4}>
                    2. Articles and Blogs
                </Heading>
                <Text mb={2}>
                    Stay updated with the latest cybersecurity trends and
                    insights:
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <ResourceCard
                        title="CyberScoop"
                        description="Enhance your cybersecurity skills with this CyberScoop."
                        url="https://www.cyberscoop.com/"
                    />
                    <ResourceCard
                        title="Dark Reading"
                        description="Learn the basics of cybersecurity with Dark Reading"
                        url="https://www.darkreading.com/"
                    />
                    <ResourceCard
                        title="Infosecurity Magazine"
                        description="Learn the basics of cybersecurity with Infosecurity Magazine."
                        url="https://www.infosecurity-magazine.com/"
                    />
                </SimpleGrid>
            </Box>

            <Box mb={6}>
                <Heading as="h2" size="lg" mb={4}>
                    3. Tools and Software
                </Heading>
                <Text mb={2}>
                    Tools and software to assist in cybersecurity tasks:
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <ResourceCard
                        title="Nmap - Network Mapper"
                        description="Enhance your cybersecurity skills with this Nmap - Network Mapper."
                        url="https://www.nmap.org/"
                    />
                    <ResourceCard
                        title="Wireshark - Network Protocol Analyzer"
                        description="Learn the basics of cybersecurity with Wireshark - Network Protocol Analyzer"
                        url="https://www.wireshark.org/"
                    />
                    <ResourceCard
                        title="OpenVAS - Vulnerability Scanner"
                        description="Learn the basics of cybersecurity with OpenVAS - Vulnerability Scanner."
                        url="https://www.openvas.org/"
                    />
                </SimpleGrid>
            </Box>

            <Box mb={6}>
                <Heading as="h2" size="lg" mb={4}>
                    4. Organizations and Associations
                </Heading>
                <Text mb={2}>
                    Join cybersecurity communities and professional
                    associations:
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <ResourceCard
                        title="ISC² - International Information System Security
                        Certification Consortium"
                        description="Enhance your cybersecurity skills with this ISC² - International Information System Security
                        Certification Consortium"
                        url="https://www.isc2.org/"
                    />
                    <ResourceCard
                        title="ISACA - Information Systems Audit and Control Association"
                        description="Learn the basics of cybersecurity with ISACA - Information Systems Audit and Control Association"
                        url="https://www.isaca.org/"
                    />
                    <ResourceCard
                        title="OWASP - Open Web Application Security Project"
                        description="Learn the basics of cybersecurity with OWASP - Open Web Application Security Project."
                        url="https://www.owasp.org/"
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default EducationalResourcesPage;

const ResourceCard = ({ title, description, url }) => (
    <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
        <Heading as="h3" size="md" mb={2}>
            {title}
        </Heading>
        <Text mb={2}>{description}</Text>
        <Link href={url} isExternal color="blue.500">
            Learn more
        </Link>
    </Box>
);
