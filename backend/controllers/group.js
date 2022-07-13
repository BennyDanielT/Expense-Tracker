import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";

export const createGroup = async (request, response) => {
    const {name, type, user_ids} = request.body;
    try {
        const fields = [{label: "Name", value: name}, {label: "Type", value: type}, {
            label: "User Ids",
            value: Array.from(user_ids, Number)
        }];

        const field = isFieldAbsent(fields)

        if (field) {
            return response.status(400).send({error: `${field.value} is a required field`})
        }

        const {data} = await supabase
            .from('group')
            .insert([
                {name, type, user_ids}
            ]);

        return response.send("Success")
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"])
    }
}