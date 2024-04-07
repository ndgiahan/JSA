const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7fbde1d2dmshc69be943ebef780p12b0e8jsn9076f14e691b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
 
        //chuyển kiểu dữ liệu
        var data = JSON.parse(result);

        //lấy ra nhiệt độ c
        var nhietDo = data.current.temp_c;
        document.getElementById('temperature').innerHTML = nhietDo
        // console.log(nhietDo);

    } catch (error) {
        console.error(error);
    }
}
getData();




