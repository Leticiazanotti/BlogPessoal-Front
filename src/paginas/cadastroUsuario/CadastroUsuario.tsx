import { Box, Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {
  let history = useNavigate();

  
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  
  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if(confirmarSenha == user.senha){
    cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
    toast.success('Usuario cadastrado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    }else{
        toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
    }
}
return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'> </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                <form onSubmit={cadastrar}>
                    <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align='center' className='textos2' >Entrar</Typography>
                    <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>)=> updateModel(event)}id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal'  type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='text-decorator-none' >
                        <Button variant='contained' color='secondary' className='btnCancelar'>
                            cancelar
                        </Button>
                        </Link>
                        <Button  type='submit' variant='contained' color='primary' >
                            cadastrar 
                        </Button>
                    </Box>
                </form>
                </Box>
            </Grid>
            
    </Grid>
);
}

export default CadastroUsuario;

//useSate - guardar algo temporariamente no backend, memoria temporaria
//localStorage - memoria fixa
//useEffect - efeito colateral 
//updatedModel - função que atualiza o campo de formulario
//setPostagens - Função que atualiza os dados postagens 
//onChange - quando mudar algo acione essa função
