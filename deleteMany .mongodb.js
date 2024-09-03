const database = 'BD3-OTAVIO-AULA'

const collection = 'LIVRARIA';

use (database);

db[collection].deleteMany(
    {autor: 'Isaac Asimov'}
)
