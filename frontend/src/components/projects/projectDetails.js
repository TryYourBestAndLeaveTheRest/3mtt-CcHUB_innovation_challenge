import {
  Box,
  Heading,
  VStack,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  //   Td,
  Th,
  Tbody,
  //   Tfoot,
} from "@chakra-ui/react";
import React from "react";

const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      projectName: "Ojutu-Ibadan Road Constructions",
      contractor: "Governor Adejohn",
      percentageCompleted: 22,
    },
    {
      id: 2,
      projectName: "Distribution of paliative to widows",
      contractor: "Minister of Finance",
      percentageCompleted: 18,
    },
    {
      id: 3,
      projectName: "Construction of New Schools in the Rural Area",
      contractor: "Senator Isamadike",
      percentageCompleted: 31,
    },
    {
      id: 4,
      projectName: "Reconstruction of Agricultural based Systems",
      contractor: "Help the youth Foundations",
      percentageCompleted: 43,
    },
    {
      id: 5,
      projectName: "Distribution of social Amenities",
      contractor: "House of reps",
      percentageCompleted: 88,
    },
  ];
  return (
    <VStack>
      <Box borderWidth={22}>
        <Heading>Ongoing Projects Details</Heading>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Assigned to</Th>
              <Th isNumeric>Percentage completed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project) => {
              return (
                <Tr key={project.id}>
                  <Th>{project.projectName}</Th>
                  <Th>{project.contractor} </Th>
                  <Th>{project.percentageCompleted}</Th>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default ProjectDetails;
