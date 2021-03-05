const searchInputCAP = document.getElementById('search-input-c');
const searchButtonSMALL = document.getElementById('search-button-c');

searchButtonSMALL.addEventListener('click', (e)=>{
	e.preventDefault();
	getASCIICap(searchInputCAP.value);
    searchInputCAP.value ='';
})



async function getASCIICap(Caplet) {
    try{
			const response = await fetch(`https://my-json-server.typicode.com/code-reaper08/ASCII-API/AlphaC?name=${Caplet}`);
			const data = await response.json();
            console.log(data);
			let ASCII = (data[0].ASCII);
			console.log(ASCII);
			let msg = document.getElementById('msg');
			msg.textContent = ASCII;
		}
    catch(error)
   {
        console.log("Some fishy error here !")
    }
    }
getASCIICap();