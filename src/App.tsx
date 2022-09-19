import * as React from "react";
import {
  Box,
  ChakraProvider,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import theme from "./style/theme";
import Board from "./components/tic-tac-toe";
import { PLAYER_SYMBOLS } from "./types";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Box minH="100vh" px={50}>
        <Box height={50} my={20}>
          <Heading size={"2xl"} color={"brand.800"}>
            Tic-Tac-Toe
          </Heading>
        </Box>
        <Box>
          <SimpleGrid>
            <VStack width={250}>
              <Heading size={"md"} color={"brand.800"} my={10}>
                Two player
              </Heading>
              <Board
                board={{
                  data: [
                    [
                      PLAYER_SYMBOLS.ROUND,
                      PLAYER_SYMBOLS.ROUND,
                      PLAYER_SYMBOLS.ROUND,
                    ],
                    [
                      PLAYER_SYMBOLS.ROUND,
                      PLAYER_SYMBOLS.ROUND,
                      PLAYER_SYMBOLS.ROUND,
                    ],
                    [
                      PLAYER_SYMBOLS.CROSS,
                      PLAYER_SYMBOLS.CROSS,
                      PLAYER_SYMBOLS.CROSS,
                    ],
                  ],
                }}
              />
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  </ChakraProvider>
);
