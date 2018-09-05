export default [
  {
    avatar: 'https://my.platform.finance/site/org_291_logo.jpg',
    name: 'АО УК «ТФГ»',
    userName: 'tfg',
    post: 'Открытие счёта',
    messages: [
      {
        userName: 'tfg',
        message: 'Пожалуйста загрузите копии документов',
        date: new Date(2018, 3, 7, 10, 20, 0, 0)
      },
      {
        userName: 'dragonKing',
        message: 'Что делать если я не хочу?',
        date: new Date(2018, 3, 7, 10, 21, 0, 0)
      },
      {
        userName: 'tfg',
        message: 'passport1.png',
        file: {
          preview: process.env.PUBLIC_URL + '/img/landing/demos/default_light.png',
          size: '(2,1 Mb)'
        },
        date: new Date(2018, 3, 7, 10, 22, 0, 0)
      },
      {
        userName: 'dragonKing',
        message: 'Вот вам мой паспорт, чтобы вы не волновались 👌',
        date: new Date(2018, 3, 7, 12, 12, 0, 0)
      },
      {
        userName: 'tfg',
        message: 'Квалификационные аттестаты ФКЦБ РФ по брокерской, дилерской деятельности и деятельности по управлению ценными бумагами 1.0, а также по управлению инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами 5.0.',
        date: new Date(2018, 3, 7, 12, 35, 0, 0)
      }
    ]
  },
  {
    avatar: process.env.PUBLIC_URL + '/img/12.png',
    name: 'ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»',
    userName: 'investmanagementcenter',
    post: 'Приобретение паёв',
    messages: []
  },
  {
    avatar: process.env.PUBLIC_URL + '/img/15.png',
    name: 'АО «Солид менеджмент»',
    userName: 'solid',
    post: 'Открытие Счёта',
    messages: [
      {
        userName: 'solid',
        message: 'Квалификационные аттестаты ФКЦБ РФ по брокерской, дилерской деятельности и деятельности по управлению ценными бумагами 1.0, а также по управлению инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами 5.0.',
        date: new Date(2018, 3, 7, 10, 22, 0, 0)
      },
      {
        userName: 'blackCat',
        message: 'Solicitude gay way unaffected expression for?',
        date: new Date(2018, 3, 7, 12, 12, 0, 0)
      },
      {
        userName: 'solid',
        message: 'Пожалуйста загрузите копии документов ',
        date: new Date(2018, 3, 7, 12, 35, 0, 0)
      }
    ]
  },
  {
    avatar: process.env.PUBLIC_URL + '/img/14.png',
    name: 'ПАО «УК "Арсагера»',
    userName: 'arsagera',
    post: 'Открытие счёта',
    messages: [
      {
        userName: 'arsagera',
        message: 'Пожалуйста загрузите копии документов ',
        date: new Date(2018, 3, 7, 12, 35, 0, 0)
      }
    ]
  }
]