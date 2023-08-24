import style from './feesStructure.module.css'
import FeesCard from '../../components/feesCard/feesCard'
import { useEffect, useState } from 'react'
import { isLoginAtom } from '../../recoilStates';
import { useRecoilValue } from 'recoil';


export default function FeesStructure (){

    const isUserLoggedIn = useRecoilValue(isLoginAtom)
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [subscribedPlan , setPlanSubscribed] = useState('')
    
    useEffect(()=> {
        const {
            planSubscribed
        } = userData?.subscriptionDetail || {}
        if(isUserLoggedIn && planSubscribed){
            setPlanSubscribed(planSubscribed)
        }
    },[])

    const plansWeOffer = [
        {
            benifits : [
                'Anniversary',
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }

        ,{
            benifits : [
                'Birthaday',
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }

        ,{
            benifits : [
                'Farewell',
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }
    ]

    const plansWeOffer1 = [
        {
            benifits : [
                'Graduation',
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }

        ,{
            benifits : [
                'Promotion',
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }

        ,{
            benifits : [
                'Propose',
            ],
            stylesData : {
                cardStyle : style.monthCard ,
                buttonStyle : style.monthCardBtn ,
                tickStyle : style.monthCardTick
            },
            isActive : subscribedPlan === 'Month Pass'
        }


    ]

    return(
        <>
        <section className={style.secWrapper} id = 'fees'>
            <h3 className={style.heading}>—————◀ SYLO Select ▶—————</h3>
            <h4 className={style.primaryHeading1}>Exclusive celebration plans</h4>
           
            <div className={style.mainWrapper}>

            <div className={style.leftSec}>
               {
                plansWeOffer.map(plan => (
                    <FeesCard plan = {plan} />
                ))
               }
            </div>
            </div>
            <div className='gap'></div>
            <div className={style.mainWrapper}>
            <div className={style.leftSec}>
               {
                plansWeOffer1.map(plan => (
                    <FeesCard plan = {plan} />
                ))
               }
            </div>
            </div>
            
        </section>
      </>
    )
}
