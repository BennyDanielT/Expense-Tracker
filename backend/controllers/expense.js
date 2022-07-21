import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";

export const addExpense = async (request, response) => {

    const {name, amount, type, user_ids, user_id, group_ids, tag_id} = request.body;

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
                label: "Amount",
                value: amount
            },
            {
                label: "User Id",
                value: user_id
            },
            {
                label: "Group Ids",
                value: group_ids
            },
            {
                label: "Tag Id",
                value: tag_id
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('expense')
            .insert([
                {name, type, user_ids, amount, user_id, group_ids, tag_id}
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

    try {
        const {data, error} = await supabase
            .from('expense')
            .select('*')
            .eq('id', id);

        if (error) {
            return response.status(400).send(error);
        }

        const groupResponse = await supabase
            .from('group')
            .select('*')
            .in('id', data[0].group_ids);

        delete data[0].group_ids;

        data[0].groups = groupResponse.data.map((ele) => ele.name);

        if (groupResponse.error) {
            return response.status(400).send(error);
        }

        const userResponse = await supabase
            .from('users')
            .select('*')
            .in('id', data[0].user_ids);

        if (userResponse.error) {
            return response.status(400).send(error);
        }

        delete data[0].user_ids;

        data[0].users = userResponse.data.map((ele) => ele.email_id);

        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const viewExpenses = async (request, response) => {
    try {
        const {user_id} = request.query;

        const {data, error} = await supabase
            .from('expense')
            .select('*')
            .eq("user_id", user_id)
        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}