import Joi from "joi";

export const createSchema = Joi.object({
    title: Joi.string().min(2).max(20).required(),
    description: Joi.string().min(2).max(40),
});

export const updateSchema = Joi.object({
    title: Joi.string().min(2).max(20),
    description: Joi.string().min(2).max(40),
});
