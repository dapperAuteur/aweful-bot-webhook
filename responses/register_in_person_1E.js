let register_in_person_1E = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type":"button",
            "text": "There’s two ways to go about this – either the County Recorder’s officer or an MVD. (Link) Click here to get the address for your County Recorder’s office (Link to https://azsos.gov/elections/voting-election/contact-information-county-election-officials) or if MVD is easier for you, (Link) click here to find the nearest one.(Link to https://www.azdot.gov/motor-vehicles/hours-and-locations)\n…\nLet me know when you’re done figuring out where to go.",
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

let RegisterInPerson1E = register_in_person_1E;
module.exports = RegisterInPerson1E;
