import { Request, Response } from "express";
import { connection } from "../data/Basedatabase";


export const GetStudents = async (req: Request, res: Response) => {
       let errorCode = 422;   

    try {

        const id = req.params.id

        if(isNaN(Number(id))){
            throw new Error ("Apenas valores numéricos")
        }
        const result = await connection.raw(`
        SELECT ROUND(DATEDIFF("2021-01-01",data_nasc)/365) as idade
        FROM ESTUDANTE
        WHERE id = ${id};
        `)

        if(result[0].length === 0){
            errorCode = 404 ;
            throw new Error("Não encontrado")
        }
        
        // acrescentado ass idade para tratar o resp do banco
        res.status(200).send({estudante: result[0][0]})
        
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }
}