const a = [
  {
    dateStart: '20.06.2022',
    dateEnd: '23.06.2022',
    days: 4,
    planned: false,
    type: 'Основной',
  },
  {
    dateStart: '24.06.2022',
    dateEnd: '17.07.2022',
    days: 24,
    planned: false,
    type: 'Дополнительный оплачиваемый отпуск за работу в РКС',
  },
  {
    dateStart: '18.07.2022',
    dateEnd: '25.07.2022',
    days: 8,
    planned: false,
    type: 'Дополнительный опл. отпуск работникам с НРД',
  },
  {
    dateStart: '26.07.2022',
    dateEnd: '10.08.2022',
    days: 16,
    planned: false,
    type: 'Основной',
  },
  {
    dateStart: '11.08.2022',
    dateEnd: '18.08.2022',
    days: 8,
    planned: false,
    type: 'Дополнительный оплачиваемый отпуск за работу в РКС',
  },
  {
    dateStart: '23.12.2022',
    dateEnd: '30.12.2022',
    days: 8,
    planned: false,
    type: 'Основной',
  },
  {
    dateStart: '29.05.2023',
    dateEnd: '28.07.2023',
    days: 60,
    planned: true,
    type: 'Основной',
  },
  {
    dateStart: '28.12.2023',
    dateEnd: '29.12.2023',
    days: 1,
    planned: true,
    type: 'Основной',
  },
];
let b = a.map(function (item) {
  return {
    ...item,
    dateStart: item.dateStart.split('.').reverse().join('-'),
    dateEnd: item.dateEnd.split('.').reverse().join('-'),
  };

  // return {
  //   ...item,
  //   dateStart: item.dateStart.split('.').join('-'),
  //   dateEnd: item.dateEnd.split('.').join('-'),
  // };
});

console.log(b);
