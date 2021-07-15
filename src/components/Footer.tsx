import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 45,
    fontWeight: 300,
    fontSize: 13,
    opacity: 0.8,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()

  const list = [
    'Про нас',
    'Довідковий центр',
    'Умови надання послуг',
    'Політика конфіденційності',
    'Політика використання файлів cookie',
    'Рекламна інформація',
    'Блог',
    'Стан',
    'Кар’єра',
    'Реклама',
    'Маркетинг',
    'Твіттер для бізнесу',
    'Розробники',
    'Каталог',
    'Налаштування',
  ]

  return (
    <div className={classes.footer}>
      {list && list.map((item, index) => <a key={index} href='null' className={classes.link}>{item}</a>)}
      <p>&#169; 2021 FakeTwitter, Inc.</p>
    </div>
  )
}

export default Footer