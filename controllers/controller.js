import { Note } from '../models';
import { updateSchema, createSchema } from "../validators";

const controller = {
    async create(req, res, next) {

        const { error } = createSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { title, description } = req.body;

        try {
            const note = await Note.create({
                title, description
            });

            if (!note) {
                return next(error);
            }

            res.json(note);
        } catch (error) {
            return next(error);
        }

    },
    async update(req, res, next) {

        const { id } = req.params;

        const { error } = updateSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { title, description } = req.body;

        try {
            const note = await Note.findOneAndUpdate({ _id: id }, {
                title, description
            });

            if (!note) {
                return next(error);
            }

            res.json(note);
        } catch (error) {
            return next(error);
        }

    },

    async index(req, res, nextF) {
        try {
            const notes = await Note.find();

            if (!notes) {
                return next(error);
            }

            res.json(notes);
        } catch (error) {
            return next(error);
        }
    }


};

export default controller;