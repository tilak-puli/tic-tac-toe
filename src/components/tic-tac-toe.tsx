import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { GameBoard } from "../types";

const Board = (props: { board: GameBoard }) => {
  return (
    <Box>
      <SimpleGrid columns={3} row={3} width={165} height={165} spacing={5}>
        {props.board.data.map((row) =>
          row.map((cell) => (
            <Box
              width={50}
              height={50}
              shadow={"cell"}
              rounded="md"
              borderColor="brand.800"
            >
              <Text height={"100%"}>{cell}</Text>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Board;
