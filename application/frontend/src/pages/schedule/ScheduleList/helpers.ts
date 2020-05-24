
let id = 0;

export const createDay = (date = "08/24/2019") => ({
	id: ++id,
	date: new Date(date),
	subjects: [
		{
			id: 1,
			order: 1,
			title: "Архітектура і проектування програмного забезпечення",
			academic: "Фоменко А.В.",
			pavilion: "XXIX",
			type: "лекція",
			classroom: "303",
		},
		{
			id: 2,
			order: 2,
			title: "Архітектура і проектування програмного забезпечення",
			academic: "Фоменко А.В.",
			pavilion: "XXIX",
			type: "лекція",
			classroom: "303",
		},
		{
			id: 3,
			order: 3,
			title: "Менеджмент проектів з розробки програмного забезпечення",
			academic: "Федорчук Є.Н.",
			pavilion: "XXIX",
			type: "лекція",
			classroom: "303",
		},
		{
			id: 4,
			order: 4,
			title: "Менеджмент проектів з розробки програмного забезпечення",
			academic: "Федорчук Є.Н.",
			pavilion: "XXIX",
			type: "лекція",
			classroom: "303",
		},
	]
});
