const primaryColor = '#0047AB'
const primaryColorAlpha = `#0047AB50`
const nav = {
    backgroundColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
const paragraph = {rows: 4,};
const row = {justifyContent: 'space-around'};
const list ={marginTop: '24px'};


export {nav, icon, card, paragraph,row,list,primaryColor}