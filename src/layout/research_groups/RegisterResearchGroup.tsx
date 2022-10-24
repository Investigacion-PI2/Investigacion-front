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
    createStyles,
    Textarea
  } from '@mantine/core';

  const useStyles = createStyles((theme) => ({

    formBox:{
      width:600,
      paddingLeft:230,
      paddingRight:230,
    },
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
        institution:'',
       faculty_id:'',
       description:'',
       colciencias_category:'',
        terms: true,
      },
  
      validate: {
        name: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
        institution: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
        faculty_id: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
        description: (val) => (val.length == 0 ? 'Esta campo es requerido' :  null),
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
        
            <div className={classes.formBox}>
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
                    label="Intitución:"
                    placeholder="ej: Universidad Icesi"
                    value={form.values.institution}
                    onChange={(event) => form.setFieldValue('institution', event.currentTarget.value)}
                    error={form.errors.institution && 'id no válido'}
                />
                <Select
                    required
                    label="Facultad:"
                    placeholder="Escoja la facultad a la que pertenece"
                    data={[
                        { value: 'CienciasAdministrativas_Economicas', label: 'Ciencias Administrativs y Economicas' },
                        { value: 'DerechoYcienciasSociales', label: 'Derecho y Ciencias Sociales' },
                        { value: 'CienciasDeLaSalud', label: 'Ciencias de la Salud' },
                        { value: 'IngenieriaYdiseno', label: 'Ingenieria y Diseño' },
                        { value: 'CienciasNaturales', label: 'Ciencias Naturales' },
                        { value: 'EscuelaCiencasDeLaEducacion', label: 'Escuela de Ciencias de la Educacion' },
                    ]}
                />
               <Select
                    required
                    label="Linea de investigacion:"
                    placeholder="Escoja la linea de investigacion en la que se especializa."
                    data={[
                        { value: 'Linea1', label: 'Linea de investigacion A' },
                        { value: 'Linea2', label: 'Linea de investigacion B' },
                        { value: 'Linea3', label: 'Linea de investigacion C' },
                        { value: 'Linea4', label: 'Linea de investigacion D' },
                    ]}
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
                <Textarea
                    required
                    label="Descripción:"
                    value={form.values.description}
                    onChange={(event) => form.setFieldValue('description', event.currentTarget.value)}
                    error={form.errors.description && 'id no válido'}
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
            </div>
    
    </MantineProvider>
    
    </div>
    </div>
  );
}

  