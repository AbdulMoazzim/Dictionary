let myfunction = (word)=>{

	const url = `https://wordwise-dictionary1.p.rapidapi.com/search_entries?search=${word}`;
	const options = {
		method: 'GET',
		headers: {
			'Cache-Control': 'no-cache',
			'X-RapidAPI-Key': 'bf4915e747msh926888ebd355b6bp113455jsn95ae94026b6c',
			'X-RapidAPI-Host': 'wordwise-dictionary1.p.rapidapi.com'
		}
	};

	let api = fetch(url, options);
	api.then((response)=>{
		return response.json()
	}).then((response)=>{
		console.log(response)
		if (response.entries.length > 0){
			console.log(response.entries.length)
			document.querySelector('.result').innerHTML = ''
			for (let i = 0; i < response.entries.length; i++) {
				if (i === 0) {
					let html = `<h3>Result:</h3>
					<p class='info'>You searched the word: <span style="font-weight: 700;" class='info' id="word"></span></p>
					<div class="mean">
						<p class='info' style="font-weight: 700;">Definition : <span style="font-weight: 400;" id="${'def'+i}"></span></p>
						<p class='info' style="font-weight: 700;">Part of Speech : <span style="font-weight: 400;" id="${'type'+i}"></span></p>
						<p class='info' style="font-weight: 700;">Sentence : <span style="font-weight: 400;" id="${'sentence'+i}"></span></p>
					</div>`
					document.querySelector('.result').innerHTML= html;
					document.querySelector('#word').innerHTML = word;
					document.getElementById(`${'def'+i}`).innerHTML = response.entries[i].word_details[0].meaning
					document.getElementById(`${'type'+i}`).innerHTML = response.entries[i].word_details[0].type
					document.getElementById(`${'sentence'+i}`).innerHTML = response.entries[i].word_details[0].sentence
				} else if (i === 1) {
					let html = `<h3>Other Words Associated With "${word}"</h3>
					<h4>${i+') '+response.entries[i].word}</h4>
					<div class="mean">
						<p class='info' style="font-weight: 700;">Definition : <span style="font-weight: 400;" id="${'def'+i}"></span></p>
						<p class='info' style="font-weight: 700;">Part of Speech : <span style="font-weight: 400;" id="${'type'+i}"></span></p>
						<p class='info' style="font-weight: 700;">Sentence : <span style="font-weight: 400;" id="${'sentence'+i}"></span></p>
					</div>`
					document.querySelector('.result').innerHTML += html;
					document.getElementById(`${'def'+i}`).innerHTML = response.entries[i].word_details[0].meaning
					document.getElementById(`${'type'+i}`).innerHTML = response.entries[i].word_details[0].type
					document.getElementById(`${'sentence'+i}`).innerHTML = response.entries[i].word_details[0].sentence
				} else {
					let html = `<h4>${i+') '+response.entries[i].word}</h4>
					<div class="mean">
						<p class='info' style="font-weight: 700;">Definition : <span style="font-weight: 400;" id="${'def'+i}"></span></p>
						<p class='info' style="font-weight: 700;">Part of Speech : <span style="font-weight: 400;" id="${'type'+i}"></span></p>
						<p class='info' style="font-weight: 700;">Sentence : <span style="font-weight: 400;" id="${'sentence'+i}"></span></p>
					</div>`
					document.querySelector('.result').innerHTML += html;
					document.getElementById(`${'def'+i}`).innerHTML = response.entries[i].word_details[0].meaning
					document.getElementById(`${'type'+i}`).innerHTML = response.entries[i].word_details[0].type
					document.getElementById(`${'sentence'+i}`).innerHTML = response.entries[i].word_details[0].sentence
				}
			}
		} else {
			alert('You should give the correct word')

		}
	})
}


let btn1 = document.querySelector('#search')
btn1.addEventListener('click',(e)=>{
	let word = document.getElementById('bar').value;
	document.getElementById('bar').value = '';
	myfunction(word)
	e.preventDefault()
})
