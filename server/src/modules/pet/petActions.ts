import type { RequestHandler } from "express";

import petRepository from "./petRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const pets = await petRepository.readAll();

    res.json(pets);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const petId = Number(req.params.id);
    const pet = await petRepository.read(petId);

    if (pet == null) {
      res.sendStatus(404);
    } else {
      res.json(pet);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newPet = {
      name: req.body.name,
    };

    const insertId = await petRepository.create(newPet);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add };
