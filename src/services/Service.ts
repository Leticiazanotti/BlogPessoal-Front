import axios from "axios";


//Create -> método que permite armazenar o endereço da api
export const api = axios.create({
    baseURL: 'https://blogpessoal-u8n0.onrender.com/'
   //baseURL:'https://blogdothiagofaccipieri.onrender.com/'

})

export const cadastroUsuario = async(url: any, dados: any, setDado:any) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data)

}

export const login = async(url: any, dados: any, setDado:any) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)

}

export const busca = async(url: any, setDado:any, header: any) =>{
    const resposta = await api.get(url, header)
    setDado(resposta.data)

}

    
//api.post -> aciona o método post da api e passando os paramentros(url e dados)
// busca - requisição de busca para listar as postagens ou temas