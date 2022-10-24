import { Navbar } from '@mantine/core';
import { ICESI_COLORS } from '../common-styles';

type AppHeaderProps = {
  opened: boolean;
}

export function AppNavbar(props: AppHeaderProps) {
  const { opened } = props;
  return (
    <Navbar p="md" hiddenBreakpoint="md" hidden={!opened} width={{ sm: 200, lg: 300 }}
      sx={{
        backgroundColor: ICESI_COLORS.darkBlue2,
        color: 'white',
      }}>
      Application navbar
    </Navbar>
  )
}