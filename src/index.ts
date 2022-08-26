import { app } from './app';
import { CreateDocente } from './endpoint/CreateDocente';
import { CreateStudent } from './endpoint/CreateStudent';
import {CreateTurma } from './endpoint/CreateTurma';



app.post("/turma",CreateTurma )
app.post("/estudante",CreateStudent )
app.post("/docente",CreateDocente )
