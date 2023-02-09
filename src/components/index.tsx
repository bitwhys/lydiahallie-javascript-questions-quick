import { styled } from '../theme'

export const AppContainer = styled('div', {
  height: '$screen',
  paddingTop: '$32',
})

export const ContainerWrapper = styled('section', {
  paddingInline: '$12',
  '& .container': {
    maxWidth: '$container',
    paddingBlock: '$8',
    marginInline: 'auto',
  },
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$4',
  marginBottom: '$16',
  '& > .kicker': {
    fontSize: '$base',
    fontWeight: '$normal',
    color: '$mauve11',
    textTransform: 'uppercase',
  },
  '& > .title': {
    fontSize: '$6xl',
    lineHeight: '64px',
    fontWeight: '$bold',
    background: 'linear-gradient(90deg, #FF7B12 0%, #C41FFF 100%)',
    backgroundClip: 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    textFillColor: 'transparent',
  },
})

export const Card = styled('div', {
  boxShadow: '$5',
  backgroundColor: 'white',
  borderRadius: '$md',
  height: '630px',
  maxWidth: '$6xl',
  paddingBlock: '$20',
  paddingInline: '$24',
})

export const Content = styled('div', {
  marginTop: '94px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '336px',
  columnGap: '$8',
})
