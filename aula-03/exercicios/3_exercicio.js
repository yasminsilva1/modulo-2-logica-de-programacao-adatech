//* 3) Use um Map para criar uma lista de contatos com nomes como chaves
//* e informações de contato (por exemplo, e-mail) como valores.
const contatos = new Map();

contatos.set("João", { email: "joao@gmail.com" });
contatos.set("Maria", { email: "maria@gmail.com" });
contatos.set("Lucia", { email: "lucia@gmail.com" });
contatos.set("Juliano", { email: "juliano@gmail.com" });

console.log(contatos);
