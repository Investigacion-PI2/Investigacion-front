import { Header, MediaQuery, Burger, Stack, Group } from '@mantine/core';

type LandingHeaderProps = {
  opened: boolean;
  setOpened: Function;
  children: React.ReactNode;
}

export function LandingHeader(props: LandingHeaderProps) {
  const { opened, setOpened, children } = props;
  return (
    <Header height={70} p="md">
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