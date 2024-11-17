type Messages = typeof import('./../messages/en.json');
type EsMessages = typeof import('./../messages/es.json');

type IntlMessages = Messages | EsMessages;
