let i_dont_have_id_1B = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type":"button",
            "text": "No worries.  There are other ways to get it done.  Choose one of these:",
            "buttons":[
                {
                    "type": "postback",
                    "title": "Register by mail",
                    "payload": "Register by mail"
                },
                {
                    "type": "postback",
                    "title": "Register in person",
                    "payload": "Register in person"
                }
            ]  
        }
    }
}

let IDontHaveId1B = i_dont_have_id_1B;
module.exports = IDontHaveId1B;
