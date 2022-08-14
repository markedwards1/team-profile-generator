const fs = require('fs');
const path = require ('path');
const cardTemplatePath = path.join(__dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, './templates', 'main.html');


function newCard(staffMember){

// read card.html template
const cardTemplate = fs.readFileSync(cardTemplatePath, "utf-8");
// replace the placehoders with actual data
let changeCards = cardTemplate.replace('{{name}}', staffMember.getName())
.replace('{{role}}', staffMember.getRole())
.replace('{{id}}', staffMember.getId())
.replace('{{email}}', staffMember.getEmail())
.replace('{{email2}}', staffMember.getEmail())



if(staffMember.getRole() === "Manager"){
    changeCards = changeCards.replace('{{special_key}}', "Office Number")
    .replace('{{special_value}}', staffMember.getOfficeNumber())
    .replace('{{special_value2}}', staffMember.getOfficeNumber())
}
if(staffMember.getRole() === "Engineer"){
    changeCards = changeCards.replace('{{special_key}}', "Github")
    .replace('{{special_value}}', staffMember.getGitHub())
    .replace('{{special_value2}}', staffMember.getGitHub())
   
}
if(staffMember.getRole() === "Intern"){
    changeCards = changeCards.replace('{{special_key}}', "School")
    .replace('{{special_value}}', staffMember.getSchool())
    .replace('{{special_value2}}', staffMember.getSchool())
}


return changeCards;
}


function newHtml(staff){
  
  
    const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8');
    // loop through staff and generate a card for each staff member
    const cards = staff.map(newCard).join(" ")

        // replace {{body}} with this string
   return mainTemplate.replace("{{body}}", cards);

}



module.exports = newHtml;