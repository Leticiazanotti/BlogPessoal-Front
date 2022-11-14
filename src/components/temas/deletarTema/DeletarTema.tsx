import React, { useEffect, useState } from 'react'
import {Box, Button, CardActions, CardContent, Typography, Card} from '@mui/material';
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarTema() {
  let history = useNavigate();
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [tema, setTema] = useState<Tema>()
  

  useEffect(() => {
      if (token === "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/temas/${id}`, setTema, {
          headers: {
          'Authorization': token
          }
      })
      }
      async function sim() {
        await deleteId(`/temas/${tema?.id}`, {
          headers: {
            Authorization: token
          }
        })
        alert('Tema apagado com sucesso')
        history('/temas')
      }
    
      function nao(){
        history('/temas')
      }

      
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;

//function sim - direciona para o componente /tema/, vai acionar o metodo deleteId e passar pelo token para deletar.
// funciton não - apenas direciona para /temas/
//history(/temas/) - troca a rota para renderizar o componente 
