import { Button, Drawer, Menu, Stack, UnstyledButton } from '@mantine/core';
import { FloatingPosition } from '@mantine/core/lib/Floating';
import { IconChevronRight } from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingHeader } from './LandingHeader'

type LandingProps = {
}

export function Landing(props: LandingProps) {
  const [opened, setOpened] = useState(false);

  const filteringOptions = (position: FloatingPosition = "bottom-start") => {
    return (
      <Menu trigger="hover" openDelay={50} closeDelay={200} position={position} transition="scale-y">
        <Menu.Target>
          <UnstyledButton>Facultad</UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<IconChevronRight size={14} />}>Ingeniería y Diseño</Menu.Item>
          <Menu.Item icon={<IconChevronRight size={14} />}>Ingeniería y Diseño</Menu.Item>
          <Menu.Item icon={<IconChevronRight size={14} />}>Ingeniería y Diseño</Menu.Item>
          <Menu.Item icon={<IconChevronRight size={14} />}>Ingeniería y Diseño</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    )
  }
  return (
    <>
      <LandingHeader opened={opened} setOpened={setOpened}>
        {filteringOptions()}
        <Link to='login'><Button>Iniciar Sesión</Button></Link>
      </LandingHeader>
      <Drawer opened={opened} overlayOpacity={0.55} overlayBlur={3} onClose={() => setOpened((o: any) => !o)}>
        <Stack>
          {filteringOptions("left-start")}
        </Stack>
      </Drawer>
    </>
  );
}