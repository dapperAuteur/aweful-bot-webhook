let register_by_mail_1D = [
    {
        "text": "This option will take a little more time, but stick with me here."
    },
    {
        "text": "First you’ve gotta (Link)click here to download and fill out this form (Link to http://sixbysix.vote/voter_registration_form.pdf)."
    },
    {
        "text": "After doing that, mail it into the county."
    },
    {
        "text": "(Link)Click here to get the right address. (Link to https://azsos.gov/elections/voting-election/contact-information-county-election-officials)\n…"
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"button",
                "text": "Let me know when you’re done.",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Done!",
                        "payload": "Done!"
                    }
                ]  
            }
        }
    }
]

let RegisterByMail1D = register_by_mail_1D;
module.exports = RegisterByMail1D;
