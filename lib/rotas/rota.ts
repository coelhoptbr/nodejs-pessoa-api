import {Request, Response} from "express";
import { PessoaController } from "../controller/pessoaController";


export class Rota {

    public pessoaController: PessoaController = new PessoaController();

    public rota(app): void {
        app.route('/pessoa')
        // Listar todos os registros de Pessoa
        .get(this.pessoaController.listar)
        // Criar registro de pessoa
        .post(this.pessoaController.incluir)

        
        app.route('/pessoa/:id')
        // Consutar registro de Pessoa
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Consultar registro de Pessoa'
            })
        })
        // Alterar registro de Pessoa
        .put((req: Request, res: Response) => {   
            res.status(200).send({
                message: 'Alterar registro de Pessoa'
            })
        })
        // Excluir registro de Pessoa
        .delete((req: Request, res: Response) => {   
            res.status(200).send({
                message: 'Excluir registro de Pessoa'
            })
        })
    }
}