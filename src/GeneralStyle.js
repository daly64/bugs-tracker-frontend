const mainColor = '#D81A60'
const backgroundColor = '#FAFAFA'
// const textColor = '#BFC6CA'
const nav = {
    marginRight:'-1rem',
    backgroundColor,
    fontWeight: 'bold',
    alignItems: 'center',
    color: mainColor,
    fontSize: '1rem',
    boxShadow: `${mainColor} 1px 1px`,
}
const icon = {
    fontSize: '2rem',
    margin: '0 2rem'
}

const card = {
    border: `.5px solid ${mainColor}`,
    textAlign: 'center',
};
const bigcard = {
    border: 'none',
    textAlign: 'center',
};
const paragraph = {rows: 4,};
const row = {justifyContent: 'space-around'};
const list = {marginTop: '2rem'};
const title = {justifyContent: 'start', fontWeight: 'bold', color: mainColor};
const status = {fontWeight: 'bold'};
const homeButton = {alignSelf: 'center', marginTop: '.7rem',};
const homeIcon = {color:mainColor};

export {homeIcon,homeButton, bigcard, title, status, nav, icon, card, paragraph, row, list, mainColor}

