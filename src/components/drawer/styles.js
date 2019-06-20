import theme from '../../Theme';
const styles = () => {
  return {
    drawer: {
      width: '20%',
      '@media (max-width:600px)': {
        width: '60%'
      },
      flexShrink: 0
    },
    drawerPaper: {
      width: '20%',
      '@media (max-width:600px)': {
        width: '60%'
      },
      backgroundColor: '#282c34'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    backgroundColor: 'primary'
  };
};
export default styles;
