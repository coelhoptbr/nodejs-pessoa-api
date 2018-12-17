import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const pessoaSchema = new Schema({

    primeiroNome: {
        type: String,
        required: 'Informe o primeiro nome'
    },
    segundoNome: {
        type: String,
        required: 'Informe o nome do meio'
    },
    ultimoNome: {
        type: String,
        required: 'Informe o último nome'
    },
    tipo: {
        type: String,
        enum: ['PF', 'PJ']            
    },
    foto: {
        type: Buffer
    },
    dataInclusao: {
        type: Date,
        default: Date.now
    }
});