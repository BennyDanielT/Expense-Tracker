import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";

export const createReminder = async (request, response) => {

    const {name, amount, user_id, desc, date} = request.body;

    try {
        const fields = [
            {
                label: "Name",
                value: name
            },
            {
                label: "Amount",
                value: amount
            },
            {
                label: "User Id",
                value: user_id
            },
            {
                label: "Description",
                value: desc
            },
            {
                label: "Date",
                value: date
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('reminder')
            .insert([
                { name: name, amount: amount, date: date, description: desc, user_id: user_id }
            ]);

        if (error) {
            return response.status(400).send(error);
        }

        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}


export const updateReminder = async (request, response) => {

    const {name, amount, user_id, desc, date} = request.body;

    const id = request.params.id;

    try {
        const fields = [
            {
                label: "Id",
                value: id
            },
            {
                label: "Name",
                value: name
            },
            {
                label: "Amount",
                value: amount
            },
            {
                label: "User Id",
                value: user_id
            },
            {
                label: "Description",
                value: desc
            },
            {
                label: "Date",
                value: date
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('reminder')
            .update(
                { name: name, amount: amount, date: date, description: desc, user_id: user_id }
            ).match(
                {id}
            )

        if (error) {
            return response.status(400).send(error);
        }

        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const deleteReminder = async (request, response) => {
    const id = request.params.id;
    try {
        const {data, error} = await supabase
            .from('reminder')
            .delete()
            .match({id});
        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});

    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const viewReminders = async (request, response) => {
    try {
        const {data, error} = await supabase
            .from('reminder')
            .select('*')
        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}