// pages/Quizzes.js

import React, { useState } from "react";
import { Box, Heading, Button, Text, Flex } from "@chakra-ui/react";

const InteractiveQuizzesPage = () => {
    const questionsBank = [
        {
            id: 1,
            question: 'What does "DDoS" stand for?',
            options: [
                "A. Distributed Denial of Service",
                "B. Data Detection and Security",
                "C. Digital Defense of Systems",
                "D. Dynamic Data Synthesis",
            ],
            correctAnswer: "A",
        },
        {
            id: 2,
            question: "What is the most common type of cyber attack?",
            options: [
                "A. Phishing",
                "B. DDoS",
                "C. Malware",
                "D. Social Engineering",
            ],
            correctAnswer: "A",
        },
        {
            id: 3,
            question: "Which of the following is not a type of malware?",
            options: [
                "A. Trojan Horse",
                "B. Ransomware",
                "C. Spyware",
                "D. Firewall",
            ],
            correctAnswer: "D",
        },
        {
            id: 4,
            question: "What is the purpose of a VPN (Virtual Private Network)?",
            options: [
                "A. To encrypt data",
                "B. To block cyber attacks",
                "C. To increase internet speed",
                "D. To hide browsing history",
            ],
            correctAnswer: "A",
        },
        {
            id: 5,
            question: "Which of the following is a strong password?",
            options: [
                "A. 123456",
                "B. Password123",
                "C. p@ssw0rd",
                "D. Correct Horse Battery Staple",
            ],
            correctAnswer: "D",
        },
        {
            id: 6,
            question:
                "What is the first step in the cybersecurity risk management process?",
            options: [
                "A. Risk assessment",
                "B. Risk mitigation",
                "C. Risk monitoring",
                "D. Risk identification",
            ],
            correctAnswer: "D",
        },
        {
            id: 7,
            question:
                "What is a common method used by cybercriminals to gain unauthorized access to a system?",
            options: [
                "A. Phishing",
                "B. Socializing",
                "C. Physical theft",
                "D. None of the above",
            ],
            correctAnswer: "A",
        },
        {
            id: 8,
            question: "What is the purpose of encryption in cybersecurity?",
            options: [
                "A. To hide data",
                "B. To detect threats",
                "C. To encrypt passwords",
                "D. To secure data transmission",
            ],
            correctAnswer: "D",
        },
        {
            id: 9,
            question: 'What does "HTTPS" stand for?',
            options: [
                "A. Hypertext Transfer Protocol Secure",
                "B. Hyper Text Transfer Processing System",
                "C. Hyperlink Transmission Protocol Secure",
                "D. Hypertext Transfer Protocol Service",
            ],
            correctAnswer: "A",
        },
        {
            id: 10,
            question:
                "Which of the following is a cybersecurity best practice?",
            options: [
                "A. Sharing passwords with colleagues",
                "B. Using public Wi-Fi for sensitive transactions",
                "C. Keeping software up to date",
                "D. Using the same password for multiple accounts",
            ],
            correctAnswer: "C",
        },
    ];

    const [selectedQuestions, setSelectedQuestions] = useState(
        questionsBank.sort(() => Math.random() - 0.5).slice(0, 5)
    );
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState({ correct: 0, wrong: 0 });

    const handleAnswerSelect = (questionId, selectedOption) => {
        setUserAnswers((prevState) => ({
            ...prevState,
            [questionId]: selectedOption,
        }));

        if (
            selectedOption ===
            selectedQuestions.find((q) => q.id === questionId).correctAnswer
        ) {
            setScore((prevScore) => ({
                ...prevScore,
                correct: prevScore.correct + 1,
            }));
        } else {
            setScore((prevScore) => ({
                ...prevScore,
                wrong: prevScore.wrong + 1,
            }));
        }
    };

    const handleEndQuiz = () => {
        // Redirect to the home page
        window.location.href = "/";
    };

    const handleRefreshQuiz = () => {
        // Refresh the questions
        setSelectedQuestions(
            questionsBank.sort(() => Math.random() - 0.5).slice(0, 5)
        );
        setUserAnswers({});
        setScore({ correct: 0, wrong: 0 });
    };
    return (
        <Box p={8}>
            <Box p={8}>
                <Heading as="h1" mb={8}>
                    Cybersecurity Quiz
                </Heading>
                <Flex alignItems="center" justifyContent="space-between">
                    <Text>
                        Test your Cybersecurity Knowledge (Interactive Quizzes)
                    </Text>
                    <Box
                        position="fixed"
                        zIndex={1000}
                        top={20}
                        right={20}
                        bg="white"
                        boxShadow="md"
                        p={4}
                        borderRadius="md"
                    >
                        <Text fontWeight="bold" mb={2}>
                            Correct: {score.correct}
                        </Text>
                        <Text fontWeight="bold">Wrong: {score.wrong}</Text>
                    </Box>
                </Flex>

                {selectedQuestions.map((question) => (
                    <Box key={question.id} mb={6}>
                        <Heading as="h2" size="md" mb={2}>
                            Question {question.id}:
                        </Heading>
                        <Text mb={4}>{question.question}</Text>
                        {question.options.map((option) => (
                            <Button
                                key={option}
                                mr={4}
                                mb={2}
                                colorScheme={
                                    userAnswers[question.id] ===
                                    option.split(".")[0]
                                        ? option.split(".")[0] ===
                                          question.correctAnswer
                                            ? "green"
                                            : "red"
                                        : "gray"
                                }
                                onClick={() =>
                                    handleAnswerSelect(
                                        question.id,
                                        option.split(".")[0]
                                    )
                                }
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>
                ))}

                <Button colorScheme="blue" onClick={handleEndQuiz}>
                    End Quiz
                </Button>
                <Button ml={4} colorScheme="blue" onClick={handleRefreshQuiz}>
                    Refresh Questions
                </Button>
            </Box>
        </Box>
    );
};

export default InteractiveQuizzesPage;
