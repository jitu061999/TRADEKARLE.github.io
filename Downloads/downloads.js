const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removecurrent();
	removeShow();
	// Add border to current tab item
	this.classList.add('active');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removecurrent() {
	tabItems.forEach(item => {
		item.classList.remove('active');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

// Opening popup
document.getElementById("openpopup").addEventListener("click", function() {
	console.log("OpenPopup clicked");
	document.getElementById("Popup").classList.add("show-popup")
})


//Closing popup
document.getElementById("closepopup").addEventListener("click", function() {
	console.log("ClosePopup clicked");
	document.getElementById("Popup").classList.remove("show-popup")
})
