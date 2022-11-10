interface UserLogin{
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    token?: string|null; // ? Ele tira a obrigatoriedade do preenchimento
 

}

export default UserLogin;