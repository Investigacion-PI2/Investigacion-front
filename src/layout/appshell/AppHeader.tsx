import { Header, MediaQuery, Burger } from '@mantine/core';

type AppHeaderProps = {
  opened: boolean;
  setOpened: Function;
}

export function AppHeader(props: AppHeaderProps) {
  const { opened, setOpened } = props;
  return (
    <Header height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened((o: any) => !o)} size="sm" mr="xl" />
        </MediaQuery>
        Application header
      </div>
    </Header>
  )
}