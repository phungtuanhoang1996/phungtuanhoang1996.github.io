$(document).ready(() => {
	calculateSelfPhotoDimension()
})

$(window).resize(() => {
	calculateSelfPhotoDimension()
})

const calculateSelfPhotoDimension = () => {
	$('#self-photo-img').height($('#intro-container-div').height() - 20)
}