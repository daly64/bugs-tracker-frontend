const primaryColor = '#0047AB'
const primaryColorAlpha = `#0047AB50`
const nav = {
    backgroundColor: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
    color: primaryColor,
    fontSize: '1rem',
    boxShadow: `${primaryColorAlpha} 1px 2px`,
}
const icon = {
    fontSize: '2rem',
    margin: '0 2rem'
}

const card = {
    border: `.5px solid ${primaryColor}`,
    textAlign: 'center',
};
const bigcard = {
    border: 'none',
    textAlign: 'center',
};
const paragraph = {rows: 4,};
const row = {justifyContent: 'space-around'};
const list = {marginTop: '24px'};
const title = {justifyContent: 'start', fontWeight: 'bold', color: primaryColor};
const status = {fontWeight: 'bold'};
const homeButton = {alignSelf: 'center', marginTop: '.7rem'};

export {homeButton, bigcard, title, status, nav, icon, card, paragraph, row, list, primaryColor}
