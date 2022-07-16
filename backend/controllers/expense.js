import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";

export const addExpense = async (request, response) => {

    const {name, type, user_ids, icon} = request.body;

    try {
        const fields = [
            {
                label: "Name",
                value: name
            },
            {
                label: "Type",
                value: type
            },
            {
                label: "User Ids",
                value: user_ids && Array.from(user_ids, Number)
            },
            {
                label: "Image",
                value: image
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('expense')
            .insert([
                {name, type, user_ids, icon}
            ]);

        if (error) {
            return response.status(400).send(error);
        }

        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}


export const editExpense = async (request, response) => {

    const {name, user_ids, icon} = request.body;

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
                label: "User Ids",
                value: user_ids && Array.from(user_ids, Number)
            },
            {
                label: "Icon",
                value: icon
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('expense')
            .update(
                {name, user_ids, icon}
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

export const deleteExpense = async (request, response) => {
    const id = request.params.id;
    try {
        const {data, error} = await supabase
            .from('expense')
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

export const viewExpense = async (request, response) => {
    const id = request.params.id;
    const user = request.query.user;

    try {
        const {data, error} = await supabase
            .from('expense')
            .select('*')
            .eq('id', id);

        if (error) {
            return response.status(400).send(error);
        }
        const userResponse = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', data[0].user_ids[0]);

        if (userResponse.error) {
            return response.status(400).send(error);
        }

        delete data[0].user_ids;
        data[0].users = userResponse.data;

        const expenseResponse = await supabase
            .from('expense')
            .select('*')

        if (expenseResponse.error) {
            return response.status(400).send(expenseResponse.error);
        }

        const expenses = {lent: [], owed: []};

        expenseResponse.data.forEach((exp) => {
           if (exp.user_id === user) {
               expenses['lent'].push(exp);
           } else {
               if (exp.user_ids.includes(user)) {
                   expenses['owed'].push(exp);
               }
           }
        });

        data[0].expenses = expenses;
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const viewExpenses = async (request, response) => {
    try {
        const {data, error} = await supabase
            .from('expense')
            .select('*')
        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const viewUsers = async (request, response) => {
    try {
        const {data, error} = await supabase
            .from('profiles')
            .select('*')
        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}