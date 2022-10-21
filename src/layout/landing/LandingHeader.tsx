import { Header, MediaQuery, Burger, Stack, Group } from '@mantine/core';
import { ICESI_COLORS } from '../common-styles';

type LandingHeaderProps = {
  opened: boolean;
  setOpened: Function;
  children: React.ReactNode;
}

export function LandingHeader(props: LandingHeaderProps) {
  const { opened, setOpened, children } = props;
  return (
    <Header height={70} p="md"
      sx={{
        backgroundColor: ICESI_COLORS.darkBlue,
        border: 'none',
      }}>
      <Group grow>
        <MediaQuery largerThan="lg" styles={{}}>
          <Burger opened={opened} onClick={() => setOpened((o: any) => !o)} size="sm" mr="xl" />
        </MediaQuery>
        <Group position="right">
          {children}
        </Group>
      </Group>
    </Header>
  )
}