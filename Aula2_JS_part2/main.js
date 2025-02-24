let pessoa = {
    nome: 'João',
    idade: 25,

    imprimir: function() {
        console.log('Nome: '+this.nome);
        console.log('Idade: '+this.idade);
    }
};

pessoa.imprimir();

// for (let prop in pessoa) {
//     console.log(prop+': '+pessoa[prop]);
// }

