"use strict";
class Agenda {
    contatos;
    constructor() {
        this.contatos = [];
    }
    adicionarContato(nome, telefone) {
        this.contatos.push({
            nome,
            telefone
        });
    }
    listarContatos() {
        for (let i = 0; i < this.contatos.length; i++) {
            console.log(`Nome: ${this.contatos[i].nome}`);
            console.log(`Telefone: ${this.contatos[i].telefone}`);
        }
    }
    buscarContato(nome) {
        let encontrado = false;
        for (let i = 0; i < this.contatos.length; i++) {
            if (nome === this.contatos[i].nome) {
                console.log(`Telefone: ${this.contatos[i].telefone}`);
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            console.log("Contato não encontrado.");
        }
    }
}
const minhaAgenda = new Agenda();
minhaAgenda.adicionarContato("Lucas", "99999-9999");
minhaAgenda.adicionarContato("Miguel", "88888-8888");
console.log(minhaAgenda);
minhaAgenda.listarContatos();
minhaAgenda.buscarContato("Lucas");
