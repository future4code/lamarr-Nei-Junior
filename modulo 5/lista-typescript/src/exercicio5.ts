
type login = { name: string, email: string, role: string}

const usuarios: login[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function buscausuario(usuarios: login[], role?:string): login[] {

    return usuarios.filter((usuarios: login) => {
        return usuarios.role === "admin"
    }
    )
}

console.table(buscausuario(usuarios))