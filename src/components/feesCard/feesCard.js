import style from './feesCard.module.css'
import Button from '../button/button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';



export default function FeesCard ({plan}) {

    const nevigate = useNavigate()
    
    const {
        passType = '',
        price = '',
        benifits = [] ,
        stylesData = {},
        isActive
    } = plan || {}

    console.log({
        plan,
        isActive
    })

    const {
        cardStyle ,
        buttonStyle,
        tickStyle
    } = stylesData
    

    function handleOnClick () {
        if(isActive){
            alert('Plan is already subscribed !!')
            return
        }
        if( !window.confirm(`Want to subscribe ${passType}`)){
            return
        }
        const userData = JSON.parse( localStorage.getItem('userData') )
        userData.subscriptionDetail.planSubscribed = passType
        userData.subscriptionDetail.isSubscribed = true
        localStorage.setItem( 'userData' , JSON.stringify(userData))
      
        nevigate('/activityPage')

    }


    return(
        <div className={`${style.feesCard} ${cardStyle}`}>
           <p className={style.passType}>{passType}</p>
           
           {
                benifits.map(benifit => (
                    <div className={style.wrapper}>
                        <CheckCircleOutlineIcon 
                            className={`${style.tick} ${tickStyle}`}
                        />
                        {benifit}
                    </div>
                ))
           }
           <Button 
                buttonText = {isActive ? 'Subscribed' : 'Get this package'}
                buttonStyle={buttonStyle}
                handleClickButton = {handleOnClick}
           />

        </div>
    )
}