import React from 'react'
import { useForm } from '@mantine/form';
import {
    TextInput,
    Select,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Anchor,
    Stack,
    Container,
    MantineProvider,
    createStyles
  } from '@mantine/core';

  const useStyles = createStyles((theme) => ({
    hero: {
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    container: {
      height: 700,
      width: 1000,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingBottom: theme.spacing.xl * 6,
      zIndex: 1,
      position: 'absolute',
  
      [theme.fn.smallerThan('sm')]: {
        height: 500,
        paddingBottom: theme.spacing.xl * 3,
      },
    },
    containerImage:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
    },
    center:{
      alignItems:'center',
      justifyContent:'center',
      textAlign: 'center',
      fontWeight:'bold'
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
    button:{
      alignItems:'center',
      justifyContent:'center',
    },
    control: {
      marginTop: theme.spacing.xl * 1.5,
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },
  }));

export function RegisterResearchGroup (props: PaperProps) {
    const form = useForm({
      initialValues: {
        name: '',
        leader_id:'',
       faculty_id:'',
       colciencias_category:'',
        terms: true,
      },
  
      validate: {
        name: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
        leader_id: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
        faculty_id: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
        colciencias_category: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),

      },
    });
    const { classes } = useStyles();

  
  return (
    <div className={classes.hero}>
        <div className={classes.container}>
    <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
        
            <Container size="lg">      
            <Paper radius="md" p="xl" withBorder {...props}>
                
           
           <div className={classes.center}>
            <Text size="lg" weight={500}>
                Crear un grupo de investigación
            </Text>
            </div>
            <hr/>
            <form onSubmit={form.onSubmit(() => {})}>
                <Stack>

                <TextInput
                    required
                    label="Nombre del grupo de Investigación:"
                    placeholder="ej: El efecto de un compuesto X en los niveles de glucosa en sangre."
                    value={form.values.name}
                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                    error={form.errors.name && 'Nombre inválido'}
                />

                <TextInput
                    required
                    label="Identificación del líder:"
                    value={form.values.leader_id}
                    onChange={(event) => form.setFieldValue('leader_id', event.currentTarget.value)}
                    error={form.errors.leader_id && 'id no válido'}
                />

                <TextInput
                    required
                    label="Identificación de la facultad:"
                    value={form.values.faculty_id}
                    onChange={(event) => form.setFieldValue('faculty_id', event.currentTarget.value)}
                    error={form.errors.faculty_id && 'id no válido'}
                />
                <Select
                    required
                    label="Categoria de Colciencias:"
                    placeholder="Escoja la categoria de Colciencias"
                    data={[
                        { value: 'A', label: 'A' },
                        { value: 'B', label: 'B' },
                        { value: 'C', label: 'C' },
                        { value: 'A1', label: 'A1' },
                    ]}
                />
                </Stack>

                <Group position="apart" mt="xl">
                <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    onClick={() =>{}}
                    size="xs"
                >
                    
                </Anchor>
                <div className={classes.button}>
                <Button type="submit" >Crear</Button>
                </div>
                </Group>
            </form>
            </Paper>
            </Container>
    
    </MantineProvider>
    
    </div>
    </div>
  );
}

  