type GenerateValidationsMessages = keyof IntlMessages['validations'];

type FieldOption<T> = {
	label: string;
	value: T;
};
