const searchInputCAP = document.getElementById('search-input-c');
const searchButtonCAP = document.getElementById('search-button-c');
const searchInputSMALL = document.getElementById('search-input-s');
const searchButtonSMALL = document.getElementById('search-button-s');
const searchInputNUM = document.getElementById('search-input-n');
const searchButtonNUM = document.getElementById('search-button-n');


searchButtonCAP.addEventListener('click', (e)=>{
	e.preventDefault();
	getASCIICap(searchInputCAP.value);
    searchInputCAP.value ='';
})

searchButtonSMALL.addEventListener('click', (e) =>{
	e.preventDefault();
	getASCIISMALL(searchInputSMALL.value);
	searchInputSMALL.value = '';
})

searchButtonNUM.addEventListener('click', (e) =>{
	e.preventDefault();
	getASCIINUM(searchInputNUM.value);
	searchInputNUM.value = '';
})


async function getASCIICap(Caplet) {
    try{
			const response = await fetch(`https://my-json-server.typicode.com/code-reaper08/ASCII-API/AlphaC?name=${Caplet}`);
			const data = await response.json();
            console.log(data);
			let ASCII = (data[0].ASCII);
			console.log(ASCII);
			let namecap = (data[0].name);
			console.log(namecap);
			let msg = document.getElementById('msgCAP');
			let name = document.getElementById('capname');
			capname.textContent = namecap;
			msgCAP.textContent = ASCII;
		}
    catch(error)
   {
        console.log("Some fishy error here !")
    }
    }

async function getASCIISMALL(Smalllet) {
	try{
			const response = await fetch(`https://my-json-server.typicode.com/code-reaper08/ASCII-API/AlphaS?name=${Smalllet}`);
			const data = await response.json();
			console.log(data);
			let ASCII = (data[0].ASCII);
			console.log(ASCII);
			let namesmall = (data[0].name);
			console.log(namesmall);
			let msg = document.getElementById('msgSMALL');
			let name = document.getElementById('smallname');
			smallname.textContent = namesmall;
			msgSMALL.textContent = ASCII;
		}
	catch(error)
	{
		console.log("Some fishy error here !")
	}
	}

async function getASCIINUM(Number) {
	try{
			const response = await fetch(`https://my-json-server.typicode.com/code-reaper08/ASCII-API/Num?name=${Number}`);
			const data = await response.json();
			console.log(data);
			let ASCII = (data[0].ASCII);
			console.log(ASCII);
			let namenum = (data[0].name);
			console.log(namenum);
			let msg = document.getElementById('msgNUM');
			let name = document.getElementById('numname');
			numname.textContent = namenum;
			msgNUM.textContent = ASCII;
		}
	catch(error)
	{
		console.log("Some fishy error here !")
	}
	}
getASCIICap();
getASCIISMALL();
getASCIINUM();
