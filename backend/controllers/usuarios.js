import { db_clientes } from "../db.js";

export const getUsers = (_, res) => {
  const query = "SELECT * FROM usuarios;";

  db_clientes.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const querry = "INSERT INTO usuarios(`nome`, `email`, `telefone`, `matricula`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.matricula,
  ];


  db_clientes.query(querry, [values], (error) => {
    if (error) return res.json(error);

    return res.status(200).json("Cliente adicionado com sucesso!");
  });
};


export const updateUser = (req, res) => {
  const querry =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `matricula` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.matricula,
  ];

  db_clientes.query(querry, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const querry = "DELETE FROM usuarios WHERE `id` = ?";

  db_clientes.query(querry, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
