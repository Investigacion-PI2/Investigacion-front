import { Button, Drawer, MantineProvider, Menu, Stack, UnstyledButton } from '@mantine/core';
import { FloatingPosition } from '@mantine/core/lib/Floating';
import { IconChevronRight } from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHeader } from './LandingHeader'
import { LandingFooter } from './LandingFooter';
import { ScreenApp } from '../screen/ScreenApp';
import { FACULTIES } from '../../model/constants';

type LandingProps = {
}

export function Landing(props: LandingProps) {
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider
      theme={{
        fontFamily: 'Ubuntu, sans-serif',
      }}>
      <LandingHeader opened={opened} setOpened={setOpened}>
        <FilteringOptions />
        <Link to='login'><UnstyledButton
          sx={{
            color: 'white',
            border: '2px solid #0FB066',
            borderRadius: '3px',
            padding: '0.5em',
          }}
        >Iniciar Sesión</UnstyledButton></Link>
      </LandingHeader>
      <Drawer opened={opened} overlayOpacity={0.55} overlayBlur={3} onClose={() => setOpened((o: any) => !o)}>
        <Stack>
          <FilteringOptions position='left-start' />
        </Stack>
      </Drawer>
      <ScreenApp />
      <LandingFooter />
    </MantineProvider>
  );
}

const FilteringOptions = (props: { position?: FloatingPosition }) => {
  const { position = "bottom-end" } = props;
  return (
    <Menu trigger="hover" openDelay={50} closeDelay={200} position={position} transition="scale-y">
      <Menu.Target>
        <UnstyledButton
          sx={{
            color: 'white',
          }}
        >FACULTAD</UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown p={0}>
        {Object.keys(FACULTIES).map((facultyKey => {
          return (
            <Menu.Item p={0}>{
              <Menu trigger="hover" openDelay={50} closeDelay={100} position={'left'} transition="scale-y" withArrow>
                <Menu.Target>
                  <UnstyledButton p={10}>{FACULTIES[facultyKey].name}</UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  {FACULTIES[facultyKey].groups.map((group) => <Menu.Item>{group}</Menu.Item>)}
                </Menu.Dropdown>
              </Menu>
            }</Menu.Item>
          );
        }))}
      </Menu.Dropdown>
    </Menu>
  )
}