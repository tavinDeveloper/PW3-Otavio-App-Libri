const database = 'BD3-OTAVIO-AULA'

const collection = 'LIVRARIA';

use (database);

db[collection].deleteOne(
    {codigo: '9'}
)
