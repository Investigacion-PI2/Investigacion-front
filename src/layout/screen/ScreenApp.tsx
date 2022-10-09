import { createStyles, Container, Title, Text, Overlay } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: 'url(/public/banner-icesi.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  blackBox: {
    position: 'absolute',
    borderRadius: '6px',
    backdropFilter: 'blur(3px)',
    backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 99.99%, rgba(217, 217, 217, 0) 100%)",
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function ScreenApp() {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      
      <Container className={classes.container} >
        <Container className={classes.blackBox}>
          <Title className={classes.title}>Investigación Icesi</Title>
          <Text className={classes.description} size="xl" mt="xl">
            La Investigación en la Universidad Icesi tiene como propósito la generación,
            aplicación y difusión de nuevos conocimientos. A partir de los procesos de
            investigación que realizan los profesores la Universidad espera contribuir al diagnóstico,
            análisis y solución de problemas y necesidades locales, regionales, nacionales e
            internacionales en el sector público y privado. 
          </Text>
        </Container>
      </Container>
    </div>
  )
}
