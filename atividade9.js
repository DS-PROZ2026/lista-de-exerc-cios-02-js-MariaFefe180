const funcionarios = [
    { nome: "Fernanda", salario: 2500 },
    { nome: "Gabriel", salario: 4200 },
    { nome: "Alice", salario: 1800 },
    { nome: "Alvaro", salario: 3500 }
];

console.log("Funcionários que ganham mais de R$ 3.000,00:");

let i = 0; 

while (i < funcionarios.length) {
    if (funcionarios[i].salario > 3000) {
        console.log(`- ${funcionarios[i].nome}: R$ ${funcionarios[i].salario}`);
    }
    
    i++; 
}