import { Request, Response } from "express";
import { connection } from "../data/Basedatabase";
import { atualizaEstudanteInput } from "../types";


export const UpdateStudents = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {

        const input :atualizaEstudanteInput = {
          estudante_id: req.body.estudante_id,
          turma_id: req.body.turma_id,
        }

        await connection.raw(`
        UPDATE ESTUDANTE
        SET turma_id = ${input.turma_id}
        WHERE id = ${input.estudante_id}
        `)


        res.status(200).send({message:"Atualizado com sucesso!"})

        
    } catch (error:any) {
        //transformando o erro nativo do banco para outra mensagem
        if(error.message.includes("foreign key constraint fails")){
            errorCode= 422;
            error.message = "Turma inexistente"
        }
        res.status(400).send({message: error.message})
    }
   
}