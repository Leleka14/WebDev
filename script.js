const mainDiv = document.querySelector('main');
const articleDiv = document.querySelector('.all-articles');
const popupWindow = document.querySelector('.popup-window');


const createPopup = (value) =>{
	let popupElement = `
	<div class="popup-window">
		<div class="popup-window-content">
			<img src="close.png" class="image-close" alt="Close">
			<div class="article-text">${value}</div>
		</div>
	</div>`;
	return popupElement;
}

const createArticle = (value) =>{
	let articleDefault = `
	<div class="article-template">
		${value}
	</div>`;
	return articleDefault
}

let articles = ['Neafsdddddddddddddd he fact that you have one long word without spaces. You can use thehe fact that you have one long word without spaces. You can use thehe fact that you have one long word without spaces. You can use thehe fact that you have one long word without spaces. You can use thehe fact that you have one long word without spaces. You can use thehe fact that you have one long word without spaces. You can use the dddddddddddddws 1', 'News 2', 'News 3', 'News 4', 'News 5']

for(let i = 0; i < articles.length; i++){
	articleDiv.innerHTML += createArticle(articles[i]);
}

document.addEventListener("click", (e) =>{
	if(e.target.className === 'article-template'){
		articleDiv.innerHTML += createPopup(e.target.textContent);
		document.querySelector('.popup-window').style.display = 'flex';
	}
	if(articleDiv.lastChild.className === 'popup-window'){
		switch (e.target.className) {
			case 'image-close':
				document.querySelector('.popup-window').style.display = 'none'
				e.target.parentNode.parentNode.remove();
				break;
			case 'popup-window':
				document.querySelector('.popup-window').style.display = 'none'
				e.target.remove();
				break;
			default:
				break;
		}
	}
})

const teams = ['Liverpool', 'Barcelona', 'Juventus', 'Manchester City']
