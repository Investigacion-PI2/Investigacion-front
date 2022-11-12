import { Card, Image, Text, Group, Badge, Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    fontFamily: 'Titillium Web, sans-serif',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  button: {
    fontFamily: 'Archivo, sans-serif',
    letterSpacing: '0.15px',
    flex: 1,
    backgroundColor: '#7C66BA',
    border: 0,
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,

    '&:hover': {
      backgroundColor: theme.fn.darken('#455882', 0.05),
    },
  }

}));

type BadgeCardProps = {
  image?: string;
  title?: string;
  category?: string;
  description?: string;
  publication?: string;
  badges?: {
    emoji: string;
    label: string;
  }[];
}

export function DetailedGroup(props: BadgeCardProps) {
  const { classes, theme } = useStyles();
  const { image, title, category, description, publication, badges } = props;
  /*  const features = badges?.map((badge) => (
     <Badge
       color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
       key={badge.label}
       leftSection={badge.emoji}
     >
       {badge.label}
     </Badge>
   )); */

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{category}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Enlaces de interés
        </Text>
        <Group spacing={7} mt={5}>
          {publication}
          {/* {features} */}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button className={classes.button} radius="md">
          Ver Miembros
        </Button>
      </Group>
    </Card>
  );
}