import { Box, Heading, Menu, Anchor } from "grommet";
import { ChatOption } from "grommet-icons";
import { useState } from "react";
import style from "styled-components";

const HeadingStyle = style(Heading)`
  margin-right: auto;
`;

const NavigationStyle = style.div`
  & > * {
    margin-right: 20px
  }
`;

function Header() {
  const [language, setLanguage] = useState("English");

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      style={{ zIndex: 1 }}
    >
      <HeadingStyle level="1" margin="none" color="brand">
        AO HyS
      </HeadingStyle>
      <NavigationStyle>
        <Anchor href="#" label="Services" />
        <Anchor href="#" label="Projects" />
        <Anchor href="#" label="Contact" />
      </NavigationStyle>
      <Menu
        label={language}
        icon={<ChatOption color="brand" />}
        items={[
          { label: "Spanish", onClick: () => setLanguage("Spanish") },
          { label: "English", onClick: () => setLanguage("English") },
        ]}
      />
    </Box>
  );
}

export default Header;
