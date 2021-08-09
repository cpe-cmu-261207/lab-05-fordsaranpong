type Foot = {
    copyright : string;
}

const Footer = ({copyright}:Foot) =>{
    return(
        <div><p className='text-center text-gray-400'>CoppyRight © 2021</p></div>);
}

export default Footer;