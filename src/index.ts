import { app } from './app';
import { UpdateDocente } from './endpoint/UpdateDocente';
import { UpdateStudents } from './endpoint/UpdateStudents';
import { CreateDocente } from './endpoint/CreateDocente';
import { CreateStudent } from './endpoint/CreateStudent';
import {CreateTurma } from './endpoint/CreateTurma';
import { GetStudents } from './endpoint/GetStudants';



app.post("/turma",CreateTurma )
app.post("/estudante",CreateStudent )
app.post("/docente",CreateDocente )
app.put("/estudante",UpdateStudents)
app.put("/docente",UpdateDocente)
app.get("/estudante/:id",GetStudents)
