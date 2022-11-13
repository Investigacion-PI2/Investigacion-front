import { Card, Image, Text, Group, Button, createStyles, Timeline, Title, Paper } from '@mantine/core';
import { IconBallpen} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    cardPhase: {
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
    },
    title: {
        fontFamily: 'Archivo, sans-serif',
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: 38,
        marginTop: theme.spacing.xs,
    },
    
    category: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: 12,
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

type ProjectProps = {
    image?: string;
    title?: string;
    phase?: string;
}

export function DetailedProject(props: ProjectProps) {
    const { classes, theme } = useStyles();
    const { image, title, phase } = props;

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
                    <Group mt="xs">
                        <Button className={classes.button} radius="md">
                            Postularse
                        </Button>
                    </Group>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} >
                <Text mt="md" className={classes.label} color="dimmed">
                    Timeline
                </Text>
                <Group spacing={7} mt={5} grow>
                    <Timeline active={1} bulletSize={24} lineWidth={2} color="orange.5">
                        <Timeline.Item bullet={<IconBallpen size={12} />} title="Actividad 1">
                            <Text color="dimmed" size="sm">1</Text>
                            <Text size="xs" mt={4}>2 hours ago</Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={<IconBallpen size={12} />} title="Actividad 2">
                            <Text color="dimmed" size="sm">2</Text>
                            <Text size="xs" mt={4}>52 minutes ago</Text>
                        </Timeline.Item>

                        <Timeline.Item title="Actividad 3" bullet={<IconBallpen size={12} />} lineVariant="dashed">
                            <Text color="dimmed" size="sm">3</Text>
                            <Text size="xs" mt={4}>34 minutes ago</Text>
                        </Timeline.Item>

                        <Timeline.Item title="Actividad 4" bullet={<IconBallpen size={12} />}>
                            <Text color="dimmed" size="sm">4</Text>
                            <Text size="xs" mt={4}>12 minutes ago</Text>
                        </Timeline.Item>
                    </Timeline>

                    <Group spacing={7} mt={5} grow>
                        <Paper shadow="md" p="xl" radius="md" sx={{ backgroundColor: '#63BAB2' }} className={classes.cardPhase}>
                            <div>
                                <Text className={classes.category} size="xs">
                                    Actualmente el proyecto esta en la fase:
                                    {phase}
                                </Text>
                                <Title order={3} className={classes.title}>
                                    Fase:
                                    {title}
                                </Title>
                            </div>
                        </Paper>
                    </Group>
                </Group>
            </Card.Section>


        </Card>
    );
}