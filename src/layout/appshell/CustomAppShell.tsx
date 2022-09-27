import { useState } from 'react';
import { AppShell } from '@mantine/core';
import { AppHeader } from './AppHeader';
import { AppNavbar } from './AppNavbar';

type CustomAppShellProps = {
  children: React.ReactNode;
}
export function CustomAppShell(props: CustomAppShellProps) {
  const { children } = props;
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      navbar={ <AppNavbar opened={opened} />}
      header={ <AppHeader opened={opened} setOpened={setOpened} /> }
    >
      {children}
    </AppShell>
  );
}