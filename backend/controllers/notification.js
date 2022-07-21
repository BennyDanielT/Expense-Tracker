import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";
import sgMail from '@sendgrid/mail'


export const getNotificationTypes = async (request, response) => {

    try {
        const {data, error} = await supabase
            .from('notification_types')
            .select("*");

        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const updateNotificationSettings = async (request, response) => {

    const {user_id, types} = request.body;
    try {
        const fields = [
            {
                label: "User Id",
                value: user_id
            },
            {
                label: "Types",
                value: types && Array.from(types, Number)
            }
        ];

        const field = isFieldAbsent(fields);

        if (field) {
            return response.status(400).send({error: `${field.label} is a required field`});
        }

        const {data, error} = await supabase
            .from('notification_settings')
            .select('*')
            .eq('user_id', user_id);

        if (error) {
            return response.status(400).send(error);
        }

        if (!data.length) {
            const {newData, newError} = await supabase
                .from('notification_settings')
                .insert([
                    {types}
                ]);
            if (newError) {
                return response.status(400).send(newError);
            }
            return response.send({success: newData});
        }

        const {newData, newError} = await supabase
            .from('notification_settings')
            .update([
                {types}
            ]).match(
                {user_id}
            );
        if (newError) {
            return response.status(400).send(newError);
        }
        return response.send({success: newData});

    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}


export const viewNotificationSettings = async (request, response) => {
    const {user_id} = request.body;
    try {
        if (user_id) {
            const {data, error} = await supabase
                .from('notification_settings')
                .select("*")
                .eq("user_id", user_id);

            if (error) {
                return response.status(400).send(error);
            }
            return response.send({success: data});
        }
        return response.status(400).send({"error": "User Id is required"});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
};


export const viewNotifications = async (request, response) => {
    try {
        const {data, error} = await supabase
            .from('notification')
            .select("*");

        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const addNotification = async (request, response) => {
    const {user_id, name, description, date} = request.body;

    try {
        const {data, error} = await supabase
            .from('notification')
            .insert([
                {user_id, name, date, description}
            ]);

        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const sendCustomEmail = async (request, response) => {
    sgMail.setApiKey("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")

    const {emailSubject, emailBody, emailMembers} = request.body;

    const msg = {
        to: emailMembers,
        from: 'uppeabhishek97@gmail.com',
        subject: emailSubject,
        text: emailBody,
    }

    sgMail
        .sendMultiple(msg)
        .then(() => {
            return response.status(200).send("Email successfully sent");
        })
        .catch((error) => {
            return response.status(400).send(error);
        })
}