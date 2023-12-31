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

interface Art {
  name: string;
  link: string;
}

interface DescriptionProps {
  desc: string;
  sourceCode: string;
  controls: Control[];
  libraries: Library[];
  art: Art[];
  maxWidth: number;
}

const Spacer = styled(Divider)`
  margin: 20px 5px;
`;

export default function Description(props: DescriptionProps) {
  const maxWidth = props.maxWidth * 0.8;
  const Heading = styled.h1`
    margin: 2.5px;
    font-size: 1.25em;
    max-width: ${maxWidth}px;
  `;

  const SubHeading = styled.h2`
    margin: 2.5px;
    font-size: 1em;
    max-width: ${maxWidth}px;
  `;

  const Text = styled.p`
    margin: 2.5px;
    font-size: 0.95em;
    max-width: ${maxWidth}px;
  `;

  const Link = styled.a`
    margin: 2.5px;
    font-size: 0.95em;
    display: inline-block;
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
        {props.controls.map((control) => {
          return <Text key={control.key}>{`${control.key}: ${control.action}`}</Text>;
        })}
        <Spacer />
        <SubHeading>Source Code</SubHeading>
        <Link href={props.sourceCode}>{props.sourceCode}</Link>
        <Spacer />
        <SubHeading>Libraries Used</SubHeading>
        {props.libraries.map((library) => {
          return (
            <div key={library.name} style={{ marginBottom: "10px" }}>
              <Text>{`${library.name}: ${library.description}`}</Text>
              <Link href={library.link}>{library.link}</Link>
            </div>
          );
        })}
        <Spacer />
        <SubHeading>Art Credits</SubHeading>
        {props.art.map((a) => {
          return (
            <div key={a.name} style={{ marginBottom: "10px" }}>
              <Text>{a.name}</Text>
              <Link href={a.link}>{a.link}</Link>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}
