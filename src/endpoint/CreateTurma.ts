import { connection } from "./../data/Basedatabase";
import { Request, Response } from "express";
import { criaEstudanteInput, CriaTurmaInput } from "../types";
import { TIPO_TURMA } from "../types";

export const CreateTurma = async (req: Request, res: Response) => {
  let ErrorCode = 400;
  let errorCode = 422;

  try {
    const input: CriaTurmaInput = {
      id: req.body.id,
      nome: req.body.nome,
      data_inicio: req.body.data_inicio,
      data_fim: req.body.data_fim,
      modulo: 0,
      tipo: req.body.tipo,
    };
    //validacao dos Preenchimentos

    if (
      !input.id ||
      !input.nome ||
      !input.data_inicio ||
      !input.data_fim ||
      !input.tipo
    ) {
      errorCode = 422;
      throw new Error("Preencha os campo corretamente");
    }

    //validacao dos tipos
    if (
      input.tipo !== TIPO_TURMA.INTEGRAL &&
      input.tipo !== TIPO_TURMA.NOTURNO
    ) {
      errorCode = 422;
      throw new Error("valores possiveis sao integrais ou noturnos");
    }
    //validacao do nome

    if (input.tipo === TIPO_TURMA.NOTURNO) {
      input.nome = input.nome += "-na-night";
    }

    // com Tudo certo faremos a conecaom com o banco

    await connection.raw(`
    INSERT INTO TURMA (id,nome,data_inicio,data_fim,modulo)
    VALUES(
      ${input.id},
      "${input.nome}",
      "${input.data_inicio}",
      "${input.data_fim}",
      ${input.modulo}
      
      )
      `);

    res.status(201).send({ message: "TURMA criada com sucesso" });
  } catch (error: any) {
    res.status(ErrorCode).send({ message: error.message });
  }
};

