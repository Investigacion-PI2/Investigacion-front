import { Navbar } from '@mantine/core';

type AppHeaderProps = {
  opened: boolean;
}

export function AppNavbar(props: AppHeaderProps) {
  const { opened } = props;
  return (
    <Navbar p="md" hiddenBreakpoint="md" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      Application navbar
    </Navbar>
  )
}