const Person = require('../models/person');

exports.index = async (request, response, next) => {
    try {
        const people = await Person.find().populate('gender');

        response.status(200).json(people);
    } catch (error) {
        next(error);
    }
};

exports.show = async (request, response, next) => {
    try {
        const { id } = request.params;

        const person = await Person.findById(id).populate('gender');

        response.status(200).json(person);
    } catch (error) {
        next(error);
    }
};

exports.create = async (request, response, next) => {
    try {
        const {
            name,
            age,
            gender
        } = request.body;

        const person = await Person.create({
            name,
            age,
            gender
        });

        response.status(200).json({
            message: "Person was created successfully",
            status: "success",
            person
        });
    } catch (error) {
        next(error);
    }
};

exports.update = async (request, response, next) => {
    try {
        const {
            id,
            name,
            age,
            gender
        } = request.body;

        await Person.findOneAndUpdate({ _id: id }, {
            id,
            name,
            age,
            gender
        });

        const person = await Person.findById(id);

        response.status(200).json({
            message: "Person was updated successfully",
            status: "success",
            person
        });
    } catch (error) {
        next(error);
    }
};

exports.destroy = async (request, response, next) => {
    try {
        const { id } = request.body;

        await Person.findOneAndDelete({ _id: id });

        response.status(200).json({
            message: "Person was deleted successfully",
            status: "success"
        });
    } catch (error) {
        next(error);
    }
};
