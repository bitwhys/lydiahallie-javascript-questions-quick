import { styled } from '../theme'

export const AppContainer = styled('div', {
  height: '$full',
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
  rowGap: '$1',
  marginBottom: '$16',
  '& > .kicker': {
    fontSize: '$base',
    fontWeight: '$semibold',
    color: '$purple600',
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
  position: 'relative',
  boxShadow: '$5',
  backgroundColor: 'white',
  borderRadius: '$md',
  height: '630px',
  maxWidth: '$6xl',
  paddingBlock: '$20',
  paddingInline: '$24',
})

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '336px',
  columnGap: '$8',
})

export const StyledTabList = styled('div', {
  padding: '$1',
  fontSize: '$xs',
  borderRadius: '$pill',
  borderWidth: '$2',
  borderColor: '$mauve7',
  color: '$mauve11',
  display: 'flex',
  columnGap: '$2',
  maxWidth: '$max',
  '& [data-restricted="true"], & [disabled]': {
    color: '$mauve8',
  },
  '[data-headlessui-state]': {
    paddingInline: '$2a',
    borderRadius: '$pill',
    paddingBlock: '$1',
    '&[data-headlessui-state="selected"]': {
      backgroundColor: '$mauve12',
      color: '$mauve1',
    },
  },
})
export const StyledTabPanel = styled('div', {
  marginTop: '$12',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$4',
  '.panel-title': {
    fontSize: '$xl',
    fontWeight: '$medium',
  },
})

export const StyledTimer = styled('button', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '$12',
  right: '$12',
  height: '$12',
  width: '$12',
  backgroundColor: '#3772FF',
  borderRadius: '$pill',
  '&:focus': {
    outline: 'none',
  },
  '.time': {
    width: '$10',
    height: '$10',
    backgroundColor: 'white',
    borderRadius: '$pill',
    display: 'flex',
    fontSize: '$lg',
    color: '#3772FF',
    fontWeight: '$bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
