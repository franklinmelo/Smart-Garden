const styles = theme => {
  return {
    card: {
      width: '40vh',
      height: '63vh',
      backgroundColor: '#727b84',
      margin: '1rem 0 1rem 0'
    },
    body: {
      marginTop: '1rem',
      marginBottom: '1rem'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  };
};
export default styles;
