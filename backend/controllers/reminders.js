import {supabase} from "../models/index.js";
import {errorCodeResponses, isFieldAbsent} from "../utils.js";
import nodemailer from "nodemailer";
import schedule from "node-schedule";

export const createReminder = async (request, response) => {

    const {name, amount, user_id, desc, date, email} = request.body;

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
                { name: name, amount: amount, date: date, desc: desc, user_id: user_id }
            ]);

        if (error) {
            return response.status(400).send(error);
        }

        console.log("user", email)

        // e-mail message options
        let mailOptions = {
            from: 'tripmanagementasdc@gmail.com',
            to: email,
            subject: 'Payment Reminder for '+name,
            text: 'Payment Reminder \nAmount: '+amount+'$ \nDetails: '+name+' - '+desc
        };

        // e-mail transport configuration
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'tripmanagementasdc@gmail.com',
                pass: 'ythscondtmxkatkj'
            }
        });

        schedule.scheduleJob(data[0].id.toString(),new Date(date), function(){
            console.log('Sending mail');
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}


export const updateReminder = async (request, response) => {

    const {id, name, amount, user_id, desc, date, email} = request.body;

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
                { name: name, amount: amount, date: date, desc: desc, user_id: user_id }
            ).match(
                {id:id}
            )

        if (error) {
            return response.status(400).send(error);
        }

        let current_job = schedule.scheduledJobs[id.toString()];
        current_job.cancel();

        console.log("user", email)

        // e-mail message options
        let mailOptions = {
            from: 'tripmanagementasdc@gmail.com',
            to: email,
            subject: 'Payment Reminder for '+name,
            text: 'Payment Reminder \nAmount: '+amount+'$ \nDetails: '+name+' - '+desc
        };

        // e-mail transport configuration
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'tripmanagementasdc@gmail.com',
                pass: 'ythscondtmxkatkj'
            }
        });

        schedule.scheduleJob(data[0].id.toString(),new Date(date), function(){
            console.log('Sending mail at '+(new Date()) );
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });



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
            .match({id: id});
        if (error) {
            return response.status(400).send(error);
        }

        let current_job = schedule.scheduledJobs[id.toString()];
        current_job.cancel();

        return response.send({success: data});

    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}

export const viewReminders = async (request, response) => {
    const {user_id} = request.body;
    try {
        const {data, error} = await supabase
            .from('reminder')
            .select('*')
            .eq('user_id', user_id);
        if (error) {
            return response.status(400).send(error);
        }
        return response.send({success: data});
    } catch (e) {
        return response.status(500).send(errorCodeResponses["500"]);
    }
}