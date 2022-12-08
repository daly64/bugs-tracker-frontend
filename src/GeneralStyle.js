const colors= {main:'#D81A60'}
const style = {
    mainColor: colors.main,
    nav: {
        marginRight: '-1rem',
        backgroundColor: "#ffffff",
        fontWeight: 'bold',
        alignItems: 'center',
        color: colors.main,
        fontSize: '1rem',
        boxShadow: colors.main+' 1px 1px',
    },
    icon: {
        fontSize: '2rem',
        margin: '0 2rem'
    },
    card: {
        border: '.5px solid '+colors.main,
        textAlign: 'center',
    },
    detail: {
        border: 'none',
        textAlign: 'center',
    },
    paragraph: {rows: 4,},
    row: {justifyContent: 'space-around'},
    list: {marginTop: '2rem'},
    title: {justifyContent: 'start', fontWeight: 'bold', color: colors.main},
    status: {fontWeight: 'bold'},
    homeButton: {alignSelf: 'center', marginTop: '.7rem',},
    homeIcon: {color: colors.main},
}


export default style

