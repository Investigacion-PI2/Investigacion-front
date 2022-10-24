import { Header, MediaQuery, Burger } from '@mantine/core';
import { ICESI_COLORS } from '../common-styles';

type AppHeaderProps = {
  opened: boolean;
  setOpened: Function;
}

export function AppHeader(props: AppHeaderProps) {
  const { opened, setOpened } = props;
  return (
    <Header height={70} p="md" sx={{
      backgroundColor: ICESI_COLORS.darkBlue,
      border: 'unset',
      color: 'white',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened((o: any) => !o)} size="sm" mr="xl" />
        </MediaQuery>
        Application header
      </div>
    </Header>
  )
}