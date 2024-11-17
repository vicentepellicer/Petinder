interface State {
	id: number;
	name: string;
	iso2: string;
}

type StatesResponse = State[];

interface City {
	id: number;
	name: string;
	latitude: string;
	longitude: string;
}

type CitiesResponse = City[];
