export const exerciseOptions = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises',
	qs: {limit: '1000'},
	headers: {
		'x-rapidapi-key': '41d3db1d3emsh0b2140a91fc1972p1b2687jsnba2a330fdded',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};