import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";

export const addExpense = async (request, response) => {

    const {name, amount, type, user_id, group_id, tag_id} = request.body;

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
            // {
            //     label: "User Ids",
            //     value: user_ids && Array.from(user_ids, Number)
            // },
            {
                label: "Amount",
                value: amount
            },
            {
                label: "User Id",
                value: user_id
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

        let user_ids = [];


        if (group_id) {
            const groupData = await supabase
                .from('group')
                .select('user_ids')
                .eq('id', group_id);
            user_ids = groupData.data[0].user_ids;
        } else {
            user_ids = [user_id];
        }

        const {data, error} = await supabase
            .from('expense')
            .insert([
                {name, type, amount, user_id, user_ids, group_id, tag_id, current_time: new Date()}
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

    const {name, user_ids, amount} = request.body;

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
                label: "Amount",
                value: amount
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('expense')
            .update(
                {name, user_ids, amount}
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

        if (data[0].group_id) {
            const groupResponse = await supabase
                .from('group')
                .select('*')
                .eq('id', data[0].group_id);

            delete data[0].group_id;

            data[0].groups = groupResponse.data.map((ele) => ele.name);

            if (groupResponse.error) {
                return response.status(400).send(error);
            }
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

export const settleExpense = async (request, response) => {
    try {
        const {id, amount} = request.body;

        const {data, error} = await supabase
            .from('expense')
            .select('amount')
            .eq("id", id);

        if (error) {
            return response.status(400).send(error);
        }

        const newAmount = data[0].amount - parseInt(amount);

        const expenseResponse = await supabase
            .from('expense')
            .update({amount: newAmount})
            .eq("id", id);

        if (error) {
            return response.status(400).send(error);
        }

        return response.send({success: expenseResponse});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}