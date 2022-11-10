import axios from "axios";


//Create -> método que permite armazenar o endereço da api
export const api = axios.create({
   // baseURL: 'https://blogpessoal-u8n0.onrender.com/'
   baseURL:'https://blogdothiagofaccipieri.onrender.com/'

})

export const cadastroUsuario = async(url: any, dados: any, setDado:any) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data)

}

export const login = async(url: any, dados: any, setDado:any) =>{
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)

}
    
//api.post -> aciona o método post da api e passando os paramentros(url e dados)
