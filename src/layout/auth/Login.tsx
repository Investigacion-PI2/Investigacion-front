import React from 'react'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Container,
    MantineProvider,
    createStyles,  Title, Overlay
  } from '@mantine/core';
import axios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import authHeader from '../../services/auth-header';

  const useStyles = createStyles((theme) => ({
    hero: {
      position: 'relative',
      backgroundImage: 'url(/public/saman.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    container: {
      height: 700,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingBottom: theme.spacing.xl * 6,
      zIndex: 1,
      position: 'relative',
  
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
    image:{
        width: 350,
        height:150,
        
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

export function Login (props: PaperProps) {
    const form = useForm({
      initialValues: {
        user: '',
        password: '',
        terms: true,
      },
  
      validate: {
        user: (val) => (val.length > 6 ? null : 'Invalid user'),
        password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
      },
    });
    const { classes } = useStyles();

    const handleLogin = async (values: typeof form.values) => {
      const user = await axios
        .post('auth', 
        {'username':values.user, 'password':values.password});
      localStorage.setItem("user", JSON.stringify(user.data));
      const success = await axios.get('success', {headers: authHeader()})
      console.log(success.data)
    };

  
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
        
            <Container size="xs">      
            <Paper radius="md" p="xl" withBorder {...props}>
                <div className={classes.containerImage}>
            <img src="/public/icesi-logo2.png" className={classes.image}/>
            </div>
           
           <div className={classes.center}>
            <Text size="lg" weight={500}>
                Grupos de investigación
            </Text>
            </div>

            <form onSubmit={form.onSubmit(handleLogin)}>
                <Stack>

                <TextInput
                    required
                    label="Usuario:"
                    placeholder="Usuario"
                    value={form.values.user}
                    onChange={(event) => form.setFieldValue('user', event.currentTarget.value)}
                    error={form.errors.user && 'Usuario inválido'}
                />

                <PasswordInput
                    required
                    label="Contraseña:"
                    placeholder="Contraseña"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Contraseña inválida'}
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
                <Button type="submit" >Iniciar sesión</Button>
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

  