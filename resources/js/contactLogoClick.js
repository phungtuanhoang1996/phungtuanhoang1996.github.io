$(document).ready(() => {
	$("#gmail-icon").click(() => {
		window.location = 'mailto:phungtuanhoang1996@gmail.com'
		console.log("gmail clicked")
	})

	$("#facebook-icon").click(() => {
		let newWindow = window.open('https://www.facebook.com/phung.tuanhoang')
		if (newWindow) newWindow.focus()
		else alert("Please allow pop up for this site")
	})

	$("#github-icon").click(() => {
		let newWindow = window.open('https://github.com/phungtuanhoang1996')
		if (newWindow) newWindow.focus()
		else alert("Please allow pop up for this site")
	})
})

$(window).on("load", () => {
	$("body").css('visibility', 'visible')

	$("#intro-container-div").addClass('loaded')
	setTimeout(() => {
		$("#project-label").addClass('loaded')
		let projectCards = $(".project-card")
		for (let i = 0; i < projectCards.length; i++) {
			setTimeout(() => {
				$(projectCards[i]).addClass('loaded').css('visibility', 'visible')

			}, i * 200)
		}
	}, 500)
})