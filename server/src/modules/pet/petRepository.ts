import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Pet = {
  id: number;
  name: string;
};

class PetRepository {
  async create(pet: Omit<Pet, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into pet (name, picture) values (?, /default.jpg)",
      [pet.name],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from pet where id = ?",
      [id],
    );

    return rows[0] as Pet;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from pet");
    return rows as Pet[];
  }
}

export default new PetRepository();
