$(document).ready(() => {
	calculateSelfPhotoDimension()
})

$(window).resize(() => {
	calculateSelfPhotoDimension()
})

const calculateSelfPhotoDimension = () => {
	$(".autosized-image").each((index, object) => {
		$(object).height($(object).parent().height() - 20)
	})
}