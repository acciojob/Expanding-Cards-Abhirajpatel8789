//your JS code here. If required.
let panels = document.querySelectorAll('.panel')

let currActive = document.querySelector('.active')
for(let p of panels){
	p.addEventListener('click',() => {
		if(!p.classList.contains('active')){
			currActive.classList.remove('active');
			p.classList.add('active')
			currActive = p;
		}
	})
}