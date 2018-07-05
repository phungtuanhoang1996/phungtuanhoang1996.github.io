$(document).ready(() => {
	populateListOfSkills()
})

const populateListOfSkills = () => {
	let skillsArray = ['HMTL', 'CSS', 'Javascript', 'JQuery', 'React.js',
						'Java']

	for (let i = 0; i < skillsArray.length; i++) {
		var listItem = document.createElement('li')
		listItem.appendChild(document.createTextNode(skillsArray[i]))
		$('#skill-list-ul').append(listItem)
		console.log(skillsArray[i])
	}
}