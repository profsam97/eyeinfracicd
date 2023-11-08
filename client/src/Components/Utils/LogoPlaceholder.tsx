import {Box} from "@mui/system";


interface IData {
    logo : string
}

const LogoPlaceholder : React.FC<IData> = ({logo}) => {
    return (
        <Box className='lifeImage'>
            <img src={`/assets/img/life/${logo}.png`} />
        </Box>
    )

}

export default LogoPlaceholder;