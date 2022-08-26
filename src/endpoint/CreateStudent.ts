import { connection } from "./../data/Basedatabase";
import { Request, Response } from "express";
import { criaEstudanteInput } from "../types";




export const CreateStudent = async (req: Request, res: Response) => {
    let ErrorCode = 400;
    let errorCode = 422;
  
    try {
      const input: criaEstudanteInput = {
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        data_nasc: req.body.data_nasc,
        hobbies: req.body.hobbies,
        turma_id: req.body.turma_id,
      };
  
      if (
        !input.id ||
        !input.nome ||
        !input.email ||
        !input.data_nasc ||
        input.hobbies.length < 1
      ) {
        errorCode = 422;
        throw new Error("Preencha os campos corretamente");
      }
  
      await connection.raw(`
            INSERT INTO ESTUDANTE(id,nome, email, data_nasc,turma_id)
            VALUES
            (
               ${input.id},
              "${input.nome}",
              "${input.email}",
              "${input.data_nasc}",
               ${input.turma_id}
            )
            `);
      //lembrando que o hobbies é um array
      for (let hobby of input.hobbies) {
        const idPassatempo = Math.floor(Math.random() * 1000000);
        //nãon é a melhor forma
        await connection.raw(`
            INSERT INTO PASSATEMPO(id,nome)
                VALUES(
                  ${idPassatempo},
                    "${hobby}"
                )
                `);
        await connection.raw(`
        INSERT INTO ESTUDANTE_PASSATEMPO(estudante_id,passatempo_id)
        VALUES(
          ${input.id},
          ${idPassatempo}
        )
        `)
      }
  
      res.status(201).send({ message: "conseguimos criar!" });
    } catch (error: any) {
      res.status(ErrorCode).send({ message: error.message });
    }
  };
  