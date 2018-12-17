import * as mongoose from 'mongoose';
import { pessoaSchema } from '../modelo/pessoaModel';
import { Request, Response } from 'express';

const Pessoa = mongoose.model('Pessoa', pessoaSchema);
export class PessoaController{

    public incluir(req: Request, res: Response) {                
        let novaPessoa = new Pessoa(req.body);
    
        novaPessoa.save((err, pessoa) => {
            if(err){
                res.send(err);
            }    
            res.json(pessoa);
        });
    }

    public listar(req: Request, res: Response) {           
        Pessoa.find({}, (err, pessoa) => {
            if(err){
                res.send(err);
            }
            res.json(pessoa);
        });
    }
}

