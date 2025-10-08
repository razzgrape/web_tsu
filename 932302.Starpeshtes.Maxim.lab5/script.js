function createModal(header, text) 
{
	let parent = document.getElementById('main');
	let child = document.createElement('div');
	child.className = 'popup';

	child.onclick = function() { removeModal('popup') };

	let modal = document.createElement('div');
	modal.className = 'popup-content';

	child.appendChild(modal);
	modal.innerHTML =  (`<h2>${header}</h2> <p>${text}</p>`);

	parent.appendChild(child);
}

function removeModal(id) 
{
	let modal = document.getElementsByClassName('popup')[0];
	modal.remove();
}