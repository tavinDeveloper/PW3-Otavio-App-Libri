const database = 'BD3-OTAVIO-AULA';
const collection = 'LIVRARIA';

use(database);

/* INSERE UM NOVO REGISTRO NA COLEÇÃO DE DADOS */
db[collection].insertOne(
    {
        "codigo":"2",
        "titulo": "O Sol Desvelado",
        "autor": "Isaac Asimov",
        "descricao": "Um homem morto, um robô danificado e um crime sem solução. Convocado para uma reunião em Washington, Elijah Baley descobre que foi escalado para investigar um novo crime. Desta vez, porém, o policial deverá deixar a segurança da Terra e enfrentar sua fobia de espaços abertos.",
        "imagem":"/livros/sol_desvelado.jpg",
        "valor": 100,
        "categoria":"Ficção Científica"
      }

    )