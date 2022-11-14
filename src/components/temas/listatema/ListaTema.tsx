import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Box, Button, Card,CardActions,CardContent,Typography,} from '@mui/material';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import './ListaTema.css';


function ListaTemas() {

  

const [token, setToken] = useLocalStorage('token');


let history = useNavigate()
  useEffect(() => {
    if(token === '') {
      alert('Você preisa estar logado pra ficar aqui')
      history('/login')
    }
  }, [token])
  


  
  const [temas, setTemas] = useState<Tema[]>([]);


  async function buscaTema() {
    await busca('/temas', setTemas, {
      headers: {
        Authorization: token
      }
    })
    
  }


  useEffect(() => {
    buscaTema()
  }, [temas.length])

  return (
    <>
    {/* o Map irá percorrer o array de temas, e gerar um card novo para cada tema existente */}
      {temas.map((tema, index) => (
        <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema {index + 1}
            </Typography>

            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>

          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Link to={`/editarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button
                    variant="contained"
                    className="marginLeft"
                    size="small"
                    color="primary"
                  >
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/apagarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size="small" color="error">
                    Deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))}
    </>
  );
}

export default ListaTemas;

//anotações
// const temas - armazenar os temas do backend
// const token - acessar o token 
// useEffect - requisisção na api
// async function - função de solicitar os temas do backend
//map - acessar oa array de temas e gerar um card para cada tema cadastrado
//let history = useNavigate - //Redireciona  o usuario para a tela de login se não tiver o token armazenado no localStorage