import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';


const router = Router();

router.post("/teste", (req: Request, res: Response) => {
  console.log(req.body);

  const emptyName = !req.body.name || req.body.name === "" || req.body.name.length < 3;
  const emptyDateBirth = !req.body.date_birth || req.body.date_birth === "";
  const emptyAge = !req.body.age || req.body.age === "";


  switch (true) {
    case emptyName:
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Campo nome é obrigatório",
        error: true,
      });
      break;

    case emptyDateBirth:
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Campo data de nascimento é obrigatório",
        error: true,
      });
      break;

    case emptyAge:
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Campo idade é obrigatório",
        error: true,
      });
      break;

    default:
      res.status(StatusCodes.ACCEPTED).json({
        message: "Cadastro realizado com sucesso",
        error: false,
      });
      break;
  }


});


export { router };
