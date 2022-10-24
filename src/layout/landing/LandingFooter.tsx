import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandFlickr, IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { ICESI_COLORS } from '../common-styles';

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: ICESI_COLORS.darkBlue2,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  img: {
    height: '45px',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
  link: {
    backgroundColor: ICESI_COLORS.midBlue,
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: ICESI_COLORS.midBlue,
      color: 'blue',
    },
  },
}));

export function LandingFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img className={classes.img} src='/icesi-logo--full--white.png'></img>
        <Group spacing={10} className={classes.links} position="right" noWrap>
          <ActionIcon className={classes.link}size="xl">
            <IconBrandFacebook size={20} stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon className={classes.link}size="xl">
            <IconBrandTwitter size={20} stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon className={classes.link}size="xl">
            <IconBrandYoutube size={20} stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon className={classes.link}size="xl">
            <IconBrandInstagram size={20} stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon className={classes.link}size="xl">
            <IconBrandFlickr size={20} stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon className={classes.link}size="xl">
            <IconBrandLinkedin size={20} stroke={1.5} color='white' />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}