import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Control {
  key: string;
  action: string;
}

interface Library {
  name: string;
  description: string;
  link: string;
}

interface DescriptionProps {
  desc: string;
  controls: Control[];
  libraries: Library[];
  maxWidth: number;
}

const Link = styled.a`
margin: 2.5px;
font-size: 0.95em;
`;

const Spacer = styled(Divider)`
margin: 20px 5px;
`;

export default function Description(props: DescriptionProps) {
  const maxWidth = props.maxWidth *0.8
  const Heading = styled.h1`
    margin: 5px 2.5px;
    font-size: 1.25em;
    max-width: ${maxWidth}px;
  `;

  const SubHeading = styled.h2`
    margin: 5px;
    font-size: 1em;
    max-width: ${maxWidth}px;
  `;

  const Text = styled.p`
    margin: 2.5px;
    font-size: 0.95em;
    max-width: ${maxWidth}px;
  `;

  return (
    <Accordion disableGutters={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack>
          <Heading>Description</Heading>
          <Text>{props.desc}</Text>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <SubHeading>Controls</SubHeading>
        <Text>
          {props.controls.map((control) => {
            return <Text>{`${control.key}: ${control.action}`}</Text>;
          })}
        </Text>
        <Spacer />
        <SubHeading>Libraries Used</SubHeading>
        <Text>
          {props.libraries.map((library) => {
            return (
              <div style={{ marginBottom: "10px" }}>
                <Text>{`${library.name}: ${library.description}`}</Text>
                <Link href={library.link}>{library.link}</Link>
              </div>
            );
          })}
        </Text>
      </AccordionDetails>
    </Accordion>
  );
}
